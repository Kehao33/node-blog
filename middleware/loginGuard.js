// 登录拦截
const guard =  (req, res, next)  => {
    // 判断用户访问是否是登录页面
    // 判断用户的登录状态， 如果用户是登录的请求放行
    // 如果用户不是登录的， 请求重定向到登录页面
    if(req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login')
    } else {
        // 用户是登录状态，就请求放行
        next();
    }
}

module.exports = guard;