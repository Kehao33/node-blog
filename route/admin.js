// 引入express框架
const express = require('express')


// 创建博客展示页面路由
const admin = express.Router();

// 当url访问/login的时候，后台发送admin/login.art给前端页面
admin.get('/login', require('./admin/loginPage'));

// 实现登录功能
admin.post('/login',require('./admin/login'))

// 创建用户里列表路由
admin.get('/user', require('./admin/userPage'))

// 实现退出功能
admin.get('/logout', require('./admin/logout'))

// 创建用户编辑功能路由
admin.get('/user-edit', require('./admin/user-edit'))

// 创建实现用户修改功能路由
admin.post('/user-edit', require('./admin/user-edit-fn'))

// 实现用户修改功能
admin.post('/user-modify', require('./admin/user-modify'))

// 删除用户功能路由
admin.get('/delete', require('./admin/user-delete'));

// 文章列表页面路由
admin.get('/article', require('./admin/article'));

// 文章编辑页面路由
admin.get('/article-edit', require('./admin/article-edit'))

// 实现文章添加功能的路由
admin.post('/article-add', require('./admin/article-add'))

// 文章更新post请求
admin.post('/article-update', require('./admin/article-update'))

admin.get('/article_delete', require('./admin/article_delete'))


module.exports = admin;