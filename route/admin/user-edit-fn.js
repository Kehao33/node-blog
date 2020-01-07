// 导入用户集合构造函数
const { User, validateUser } = require('../../model/user')
// 引入加密模块
const bcrypt = require('bcrypt')
module.exports = async (req, res, next) => {
  try {
    await validateUser(req.body)
  } catch (err) {
    // 验证没有通过，重定向回用户添加页面
    // return res.redirect(`/admin/user-edit?message=${err.message}`)
    // JSON.stringify()将对象数据类型转化为字符串数据类型
    return next(
      JSON.stringify({ path: '/admin/user-edit', message: err.message })
    )
  }
  // 查找是否邮箱已经存在
  let user = await User.findOne({ email: req.body.email })
  // 如果能找到这个用户，说明邮箱已经被被人占用了
  if (user) {
    // 重定向到用户添加页面
    // res.redirect(`/admin/user-edit?message=邮箱已经注册过了!`)
    return next(
      JSON.stringify({ path: '/admin/user-edit', message: '邮箱已注册' })
    )
  }
  // 如果数据库中没有该邮箱，则加密密码， 先生成随机字符串
  const salt = await bcrypt.genSalt(10)
  // 加密
  const password = await bcrypt.hash(req.body.password, salt)
  // 替换密码
  req.body.password = password
  // 将用户信息添加到数据库中
  await User.create(req.body)
  // 将页面重定向到用户user页面
  res.redirect('/admin/user')
}
