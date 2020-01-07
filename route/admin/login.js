// 导入用户集合构造函数
const { User } = require('../../model/user')
// 导入加密第三方库 bcrypt
const bcrypt = require('bcrypt');
module.exports =  async (req, res) => {
    // 接受请求参数,并进行结构赋值
    const {email, password} = req.body;
    // 如果用户没有输入邮件地址
    if(email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', {msg: '邮箱或者是密码错误!'});
    }
    // 根据邮箱地址查询用户信息，如果查询到了用户user变量的对象类型 对象中存储的使用户信息
    // 如果没有查询到用户user变量为空
    let user = await User.findOne({email});
    // 查询到了用户
    if(user) {
        // 将客户端产地过来的密码和用户信息的密码进行对比
        let isValid = await bcrypt.compare(password, user.password);
        if(isValid) {
            // 登录成功
            // 将用户名存储在req中
            req.session.username = user.username;
            // req.app得到的app就是app.js里的创建的app, app里有locals对象，locals里的数据模板文件可以直接得到
            req.app.locals.userInfo = user;
            // 重定向到用户列表页面
            res.redirect('/admin/user');
        } else {
             res.status(400).render('admin/error', {msg: '邮箱地址或者密码错误'});
        }

    }else {
        // 没有查询到用户
        res.status(400).render('admin/error', {msg: '邮箱地址或者密码错误'});
    }
}
