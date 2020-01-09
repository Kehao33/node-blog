// 引入文章的构造函数
const { Article } = require('../../model/article')
module.exports = async (req, res) => {
    const { id } = req.query
    await Article.findOneAndDelete({_id: id});
    res.redirect('/admin/article')
}