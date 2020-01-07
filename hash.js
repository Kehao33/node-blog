// 导入bcrypt
const bcrypt = require('bcrypt')


async function run() {
    // 生变成随机字符串 genSalt方法接受一个数作为参数，数值越大生成的随机字符串的复杂度越高，反之
    // genSalt方法默认值是10
    const salt = await bcrypt.genSalt(10)  // 返回一个随机字符串
    // bcrypt.hash(password, saltStr)对密码进行加密, 
    // hash函数的第一个参数是要进行加密的明文，
    // 第二个参数是生成的随机字符串，最终返回的是加密后的密码
    const result = await bcrypt.hash('1dads', salt);
    console.log(salt)
    console.log(result)
}

run()