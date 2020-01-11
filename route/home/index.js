const { Article } = require('../../model/article')
// 导入分页模式
const pagination = require('mongoose-sex-page')

module.exports = async (req, res) => {
  // 结构解析出页码值
  const {page} = req.query;
  let result = await pagination(Article)
    .page(page)
    .size(4)
    .display(5)
    .find()
    .populate('author')
    .exec();
  // 渲染模板并传递数据
  
  res.render('home/default', {
      result
  })
}
