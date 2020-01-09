// 将文章集合的构造函数导入到当前文件中
const { Article } = require('../../model/article')
// 导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page')
// 向外暴露一个请求函数
module.exports = async (req, res) => {
  // 接受客户端传递过来的页码
  const page = req.query.page
  // 标识，标识当前访问的是文章管理页面
  req.app.locals.currentLink = 'article'
  // 查询所有文章数据, 多集合联合查询
  // page 指定当前页， size指定每页显示的数据条数，
  // exec代表向数据库中发送查询请求， display指定客户端要显示的页码数量
  // 查询素有文章数据
  let article_count = await Article.countDocuments({});
  let articles = await pagination(Article)
    .find()
    .page(page)
    .size(8)
    .display(3)
    .populate('author')
    .exec()
  // res.send(articles)
  res.render('admin/article', {
    articles,
    article_count
  })
}
