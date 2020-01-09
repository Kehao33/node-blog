// 引入第三方包，formidable
const formidable = require('formidable')
const path = require('path')
// 引入文章的构造函数
const { Article } = require('../../model/article')

module.exports = (req, res) => {
  // 得到post表单提交给后台的所有数据
  // 因为req.body只能处理一般的enctype默认的application/x-www-form-urlencoded 类型表单,
  // const {title, author, publishDate, cover, oldCover, content} = req.body

  // 所以只有使用第三方的包来获取二进制即,  enctype="multipart/form-data"的表单的数据
  // 创建表单对象
  const { art_id } = req.query
  const form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.uploadDir = path.join(__dirname, '../../public/uploads')

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log('解析出错')
      return
    } else {
      const { title, author, oldCover, publishDate, content } = fields
      const cpath = files.cover.path
      const nc = cpath.split('public')[1];
      lastCover =
        nc.lastIndexOf('.') != -1 ? nc : oldCover;
      console.log(lastCover)
      newArticle = {
        cover: lastCover,
        title,
        author,
        publishDate,
        content
      }

      await  Article.update({_id: art_id}, newArticle);
      res.redirect('/admin/article')
    }
  })
}
