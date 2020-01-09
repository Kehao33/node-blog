const { User } = require('../../model/user')
module.exports = async (req, res) => {
  // 标识，标识当前访问的是用户管理页面
  req.app.locals.currentLink = 'user'
  // 获取到地址栏中的id参数
  const { message, id} = req.query
  if (id) {
    // 修改操作
    let user = await User.findOne({ _id: id })
    // 渲染用户修改页面
    res.render('admin/user-edit', {
      message,
      user,
      link: '/admin/user-modify?id=' + id,
      button: '修改'
    });
  } else {
    // 添加操作
    res.render('admin/user-edit', {
      message,
      link: '/admin/user-edit',
      button: '添加'
    })
  }
}
