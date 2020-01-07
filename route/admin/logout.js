module.exports = (req, res) => {
    // 删除session
    console.log('res:')
    console.log(res)
    res.clearCookie('connect.sid');
    // 重定向到登录页面
    res.redirect('/admin/login')

}