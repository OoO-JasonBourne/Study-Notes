## express
### 简介
基于 Node.js 平台，快速、开放、极简的 Web 开发框架 \
Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能
###### Express 框架核心特性：
可以设置中间件来响应 HTTP 请求。 \
定义了路由表用于执行不同的 HTTP 请求动作。 \
可以通过向模板传递参数来动态渲染 HTML 页面。

### 路由 router
const express = require("express"); \
const app = express(); \

app.get("/", (req, res) => { \
    res.send("msg") \
}) \
app.post("/", (req, res) => { \
    res.send("msg") \
})

###### 路由句柄
var express = require('express') \
var router = express.Router() \
router.get() \
router.post()\
module.exports = router
###### 在index.js中引用
const express = require("express"); \
const app = express(); \
const router = require("./router"); \
app.use("/api", router);

### 托管静态文件    express.static(root, [options])
为了提供诸如图像、CSS 文件和 JavaScript 文件之类的静态文件，请使用 Express 中的 express.static 内置中间件函数。
###### app.use(express.static('public'))

### get/post 传参
###### get请求使用 url.parse
###### parse()方法接受一个URL字符串，解析它，然后返回一个URL对象。如果urlString不是字符串，则抛出类型错误。如果存在auth属性但无法解码，则会抛出URIError。
**const { username, password } = req.body;**
语法：
url.parse(urlStr, [parseQueryString], [slashesDenoteHost]) \
参数1：必填 {string} 要解析的url地址 \
参数2：{boole} 将查询（query）参数解析成对象形式，默认为false \
参数3：{boole} 如果为真，在文字字符串//之后和下一个/之前的第一个标记将被解释为主机。例如，给定//foo/bar，结果将是{host: ‘foo’， pathname: ‘/bar’}，而不是{pathname: ‘//foo/bar’}。默认值:false。

###### post请求使用 bodyParser
###### bodyParser处理用户post请求提交的数据，把数据保存在req.body中。以一个对象的形式提供给服务器，方便进行后续的处理
**const { username, password } = req.body;**
const express = require("express"); \
const app = express(); \
const bodyParser = require("body-parser"); \
const router = require("./router") \

app.use(bodyParser.urlencoded({  \
    extended:true  \
})) 

