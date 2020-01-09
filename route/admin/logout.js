module.exports = (req, res) => {
    // 删除session， 要清除谁，最好就是查看Application中的Cookies
    res.clearCookie('connect.sid');
    // res.clearCookie('sessionID'); //只是清除了sessionID，但是连接的的sid没有清除，记录就还保留有cookie记录
    // 重定向到登录页面
    res.redirect('/admin/login')
}