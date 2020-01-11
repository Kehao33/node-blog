// 引入mongoose第三方模块
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
const config = require('config');
// 获取config文件下的db信息
const {user, pwd, host, port, dbname} = config.get('db');
// console.log(config.get('db'));
// 连接数据库
mongoose.connect(`mongodb://${user}:${pwd}@${host}:${port}/${dbname}`, { useNewUrlParser: true,  useUnifiedTopology: true})
    .then( () => console.log('blogDB数据库连接成功!'))
    .catch( () => console.log('blogDB数据库连接失败'))