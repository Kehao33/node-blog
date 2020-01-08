// 引用express框架
const express = require('express')
const path = require('path')
// 引入body-parser模块，他会在req对象向挂载一个body属性，用来获取post请求
const bodyParser = require('body-parser')
// 导入express-session 模块
const session = require('express-session')
// 导入art-template模板引擎
const template = require('art-template');
// 导入dateformat第三方模块
const dateFormat = require('dateformat');
// 创建网站服务器
const app = express()

// 数据库连接
require('./model/connect')
// 处理post请求参数
app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
app.use(bodyParser.json())
// 配置session ， secret：这个秘钥是可以自定义的，是用来加密客户端的信息，保证信息的安全性，服务器根据secret的值来解密
app.use(session({ secret: 'secret key' }))
// 告诉express框架 模板所在的位置
app.set('views', path.join(__dirname, 'views'))
// 告诉express框架模板的默认后缀是什么
app.set('view engine', 'art')
// 当渲染后缀为 art 的模板时， 所使用的模板引擎是什么
app.engine('art', require('express-art-template'))
// 向模板内部导入dateFormate变量
template.defaults.imports.dateFormat = dateFormat;
// 开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')))

// 引入路由模块
const home = require('./route/home')
const admin = require('./route/admin')

app.use('/admin', require('./middleware/loginGuard'))

// 拦截url请求，/home就去找home路由，以此类推
app.use('/home', home)
app.use('/admin', admin)

app.use((err, req, res, next) => {
  // JSON.parse()将字符串对象转化为对象类型 ,res.redirect(`/admin/user-edit?message=${err.message}`)
  const result = JSON.parse(err);
  // let obj = {path: '/admin/user-dit', message: '密码比对失败，不能进行信息的修改', id: id}
  // 为了解决多个参数的动态拼接，进行如下操作
  let params = []
  for (let attr in result) {
    if(attr != 'path') {
      params.push(attr + '=' + result[attr]);
    }
  }
  res.redirect(`${result.path}?${params.join('&')}`)
})

// 监听端口
app.listen(80)

console.log('请用网页访问localhost')
