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

// 创建用户编辑页面路由
admin.get('/user-edit', require('./admin/user-edit'))

// 创建实现用户修改功能路由
admin.post('/user-edit', require('./admin/user-edit-fn'))

module.exports = admin;