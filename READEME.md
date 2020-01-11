1. npm i express art-template mongoose express-art-template
2. node app.js 启动服务
3. 使用body-parser来获取posti表单请求 npm.js上搜索查看使用方法
4. bcrypt： 密码加密（第三方模块）依赖于python2.x, node-gyp(npm install -g node-gyp), windows-build-tools(npm i -g --production windows-build-tools)
5. 服务端使用session存储客户端发过来的信息 npm i express-session
6. javascript对象的规则描述语言和验证器 npm i joi
7. body-parser：只能用于处理普通的表单请求参数，不能够用来处理二进制数据
8. formidable：（npm i formidable) 解析表单， 支持get请求参数，post请求参数，文件上传（二进制数据才能传递到服务端）
9. dateformat 格式化时间 npm i dateformat
10. 实现数据分页第三方 mongoose-sex-page
11. morgan第三方实现客户端的请求打印到后台的控制台中，方便观看请求信息
12. 第三方模块config： 允许开发人员将不同运行环境下的应用配置信息单独抽离到文件中，模块内部自动判断当前应用的运行环境，并读取对应的配置信息，极大提供应用配置信息的维护成本，避免了当前运行环境重复的多次切换，手动到项目代码中修改配置信息
    使用步骤： 1. npm i config
              2. 在项目的根目录下新建config文件夹
              3. 在config文件夹下新建default.json,development.json,production.json问津
              4. 在项目中通过require方法将模块进行导入
              5. 使用模块内部提供的get(key)方法获取config下json文件配置信息
    config第三方允许将敏感重要的信息存放在系统环境变量中，将敏感信息配置在 custom-environment-variables.json 文件中
    如：在custom-environment-variables.json中配置 { "db"{ "password": "DB_PASSWORD" } },其中DB_PASSWORD为在环境变量中配置好的数据库密码的明文信息， 获取的时候，只需要使用config.get("db.password")即可得到在环境变量中配置好的信息。

    



## 注意： 
1. html文件不属于静态资源文件，因为html文件还需要拼接到从后台获取的数据
2. 模板文件中的相对路径是相对于浏览器请求路径的
3. 浏览器会将请求路径的最后一部分是文件

4. 在模板文件中使用 / 来代表绝对路径， 且在模板文件中使用绝对路径来导入外链资源的文件（如css、js文件）/代表服务器(即静态资源）的绝对路径
5. 模板的路径是由模板引擎来解析的，外链资源是由浏览器来解析的

6. 在 express-art-template中，引入子模板的方式: {{include '子模板的路径/子模板的名字' }}
7. 由于客户端可以禁用javascript代码，所以后端必须要进行表单验证。
8. return false; 阻止程序向下执行并且阻止表单提交
9. js中大多数的函数是异步函数，在获取的数据的时候注意是否有wait **


## 技术点：
1. 抽离公共样式，然后通过{{include 'path/file'}}来引入到模板中去
2. 抽离骨架模板: 定义坑 {{block 'name'}}{{/block}} 在骨架文件中定义
                填坑： {{block 'name'}}填坑的内容{{/block}}
3. 在子模块中使用骨架模板： 1. 先继承 {{exptend 'path/file'}}
                          2. 在填坑 {{block 'name'}}self-content{{/block}}, 填坑满足自身的需要
4. 哈希加密是单程加密，不能解密，但是可以使用暴力破解来破解简单的密码

5. session 在服务端，存储用户信息
6. cookie 在客户端，cookie中的数据是以域名的形式进行区分的cookie中的数据会随着请求自动发送到服务端。cookie中的数据是有过期时间的，超过时间数据会被浏览器自动删除。
7. 分页功能： 
    mongoose对数据库的操作
    User.countDocuments({})返回User下的总共的数据项数
    limit(n); //limit限制查询数量， 传入每页显示的数据数量
    skip(1); // skip跳过了多少条数据，传入显示数据的开始位置
    数据开始查询位置 = （当前页-1）*每页显示的数据条数



加强理解： session和cookie
        session会生成一个sessionID，然后将sessionID作为唯一标识来存储客户端的信息，并将sessionID存储在cookie中，让浏览器有记忆功能
    
    只要重启服务器，session就会失效
    form 表单中的enctype属性指定表单数据的编码类型 默认为application/x-www-form-urlencoded  如： name=zhangsan&age=20

    文件上传表单的编码格式必须为二进制形式传递到二进制。
    enctype="multipart/form-data" :即代表将数据编码成二进制的类型

js:读取文件 FileReader 读取二进制文件
在表单选择控件中，可以给表单加上multiple属性，可以一次性选择多个文件

    

