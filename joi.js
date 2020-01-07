// 引入joi模块

const Joi = require('joi')

// 定义对象的验证规则
const schema = {
    username: Joi.string().min(2).max(5).required().error(new Error('username没有通过验证规则')),
    birth: Joi.number().min(1990).max(2020).error(new Error('birth没有通过验证规则'))

};

async function run() {
    try {
        // 实行验证
        await Joi.validate({username: 'ab', birth: 1800}, schema)    
    } catch (error) {
        console.log(error.message)
        return ;
    }
    console.log('验证通过')
}

run();
