// 引入mongoose第三方模块
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/blogDB', { useNewUrlParser: true,  useUnifiedTopology: true})
    .then( () => console.log('blogDB数据库连接成功!'))
    .catch( () => console.log('blogDB数据库连接失败'))