const { User } = require('../../model/user')
const bcrypt = require('bcrypt')
module.exports = async (req, res, next) => {
  // 接受客户端传递过来的请求参数
  const { username, email, role, state, password } = req.body  // 即将要修改的用户id
  const id = req.query.id

  let user = await User.findOne({ _id: id })
  const isValid = await bcrypt.compare(password, user.password)
  if (isValid) {
    // 密码比对成功 collection.updateOne(指定数据库中的对象，修改的信息对象)
    await User.updateOne({_id: id}, {
        username,
        email,
        role,
        state,
    })
    // 将页面重定向到用户列表页面
    res.redirect('/admin/user');
  } else {
    // 密码比对失败
    let obj = {path: '/admin/user-edit', message: '密码比对失败，不能进行信息的修改', id: id}
    next(JSON.stringify(obj));
  }
}
