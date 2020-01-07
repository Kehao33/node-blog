// 引入user构造函数
const { User } = require('../../model/user')
module.exports = async (req, res) => {
  // 接受客户端传递过来的当前页参数
  let page = req.query.page || 1;
  // 每一页显示的数据条数
  let pagesize = 10;
  // 查询用户数据的总数
  let count = await User.countDocuments({});
  // 也买你要显示的总页数
  let total = Math.ceil(count / pagesize);
  // 页码对应的数据的开始查询位置
  let start = (page - 1) * pagesize;
  // 将用户信息从数据库中查询出来
  let users = await User.find({})
    .limit(pagesize)
    .skip(start)
  res.render('admin/user', {
    users,
    page,
    total
  })
}
