// 引入article构造函数
const { Article } = require('../../model/article')

// 向外暴露一个请求函数
module.exports = async (req, res) => {
  // 标识，标识当前访问的是文章管理页面
  const { id } = req.query
  req.app.locals.currentLink = 'article'

  if (id) {
    // 说明这是修改操作
    const article = await Article.findOne({ _id: id }).populate('author');
    res.render('admin/article-edit', {
      article,
      actionTo: '/admin/article-update?art_id=' + id,
      button: '修改'
    })
  } else {
    // 否则说明是发布文章
     res.render('admin/article-edit', {
         actionTo: '/admin/article-add',
         button: '添加'
     })
  }
}
