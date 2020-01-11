//  导入文章集合构造函数
const {Article} = require('../../model/article')

module.exports = async (req, res) => {
    // 接受客户端传递过来的文章id值
    const {id} = req.query;
    // 根据id查询文章详细信息
    let article = await Article.findOne({_id: id}).populate('author');
    // res.send(article)
    res.render('home/article', {
        article
    })
    
}