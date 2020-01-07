const { User } = require('../../model/user')
module.exports = async (req, res) => {
  // 根据要删除的用户id来删除数据库里的数据
  await User.findOneAndDelete({ _id: req.query.id })
  res.redirect('/admin/user')
}
