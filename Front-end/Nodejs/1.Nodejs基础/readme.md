# Nodejs
**一定要看API, 十分重要**


## Nodejs简介
### 简介
Node.js 是一个开源与跨平台的 JavaScript 运行时环境,2009年被开发出来. \
Node.js 在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核）。 \
Node.js 在其标准库中提供了一组**异步的 I/O 原生功能**（用以防止 JavaScript 代码被阻塞）. \
**I/O**（英语：Input/Output），即输入/输出，通常指数据在内部存储器和外部存储器或其他周边设备之间的输入和输出 \
当 Node.js 执行 I/O 操作时（例如从网络读取、访问数据库或文件系统），Node.js 会在响应返回时恢复操作，而不是阻塞线程并浪费 CPU 循环等待。 \
这使 Node.js 可以在一台服务器上处理数千个并发. \

### 安装与运行
node index.js

## 全局对象
### 定时器
### console.log(__dirname)  获取当前路径
### console.log(__filename)  获取当前路径和文件名称

## 回调函数
### 声明式函数
function sayHi(){ \
    console.log("hi"); \
} \
 
var sayBye = function(){ \
    console.log("bye"); \
} \

### 回调函数,可以将函数和值作为参数传递
var sayHello = function(name){
    console.log("bye," + name);
}

var meet = function(call, arg){
    call(arg)
}

meet(sayHello, "world")

## 模块 Commonjs规范
### 导出
module.exports = {
    add,
    abstract
}
### 导入
var utils = require("./utils")

## 事件 event
大多数 Node.js 核心 API 构建于惯用的异步事件驱动架构，其中某些类型的对象（又称**触发器，Emitter**）会触发命名事件来调用函数（又称**监听器，Listener**）。
所有能触发事件的对象都是 EventEmitter 类的实例。 这些对象有一个 eventEmitter.on() 函数，用于将一个或多个函数绑定到命名事件上。当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都会被**同步调用**。
###### 同步调用:自上而下

### 引入事件    var events = require('events');
util是一个Node.js核心模块，提供常用函数的集合。其中包括：
格式化输出字符串:    util.format(format[, ...])、
对象的序列化:   util.inspect(object[, options])
实现对象间原型继承：util.inherits(constructor, superConstructor)

##  文件读写    **fs-文件系统**

### 读写(同步)
var fs = require("fs");
var readmeR = fs.readFileSync("./readme.txt", "utf8");  --read
console.log(readme);

fs.writeFileSync("./readme.txt", data);      --write

### 读写(异步)
var fs = require("fs");

var readme = fs.readFile("./readme.txt", "utf8", function(err, data){
    console.log(data)
});

console.log("finished");
*异步加载先打印 "finished",在打印读取的 readme文件*

#### 异步读取写入的文件
var fs = require('fs');

var readMe = fs.readFile("readMe.txt", "utf8", function(err, data) {
    fs.writeFile('writeMe.txt', data, function() {
        console.log('writeMe has finished');
    })
});

console.log("finished");


## 流(Stream) 和管道(pipe) 
### 流(Stream)
**fs.createReadStream**
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
*上面的操作是把数据转换成buffer对象读取*

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt',"utf8");
*直接读取*

使用读取流的时候一般监听 end 


#### 示例,使用读取和写入流
var fs = require('fs');
###### *myReadStream是读取到的文件内容*
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt',"utf8");   
###### *myWriteStream是要写入的文件地址*
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

var data = ""

myReadStream.on('data', function(chunk) {
    myWriteStream.write(chunk);
})

myReadStream.on('end', function() {
    console.log("end");
})

### 管道(pipe)
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

###### *myReadStream是文件内容,通过管道写入到myWriteStream文件中去*
myReadStream.pipe(myWriteStream);
内容.pipe(文件地址)

#### 其他
**node:zlib** 模块提供了使用 Gzip、Deflate/Inflate、以及 Brotli 实现的**压缩**功能。
要访问它：
const zlib = require('node:zlib'); 

**node:crypto** 模块提供了**加密**功能，其中包括了用于 OpenSSL 散列、HMAC、加密、解密、签名、以及验证的函数的一整套封装。
var crypto = require('crypto');

## Web服务器输出内容
**http**
源代码: lib/http.js,要使用 HTTP 服务器和客户端，则必须 require('node:http')。
Node.js 中的 HTTP 接口旨在支持该协议的许多传统上难以使用的功能。 特别是大的，可能是块编码的消息。 接口从不缓冲整个请求或响应，因此用户能够流式传输数据。

HTTP 消息头由类似如下的对象表示：
{ 'content-length': '123',
  'content-type': 'text/plain',
  'connection': 'keep-alive',
  'host': 'example.com',
  'accept': '*/*' } 
键是小写的。 值不会被修改。

为了支持所有可能的 HTTP 应用程序，Node.js HTTP API 是非常低层的。 它只进行**流处理和消息解析**。 它将消息解析为标头和正文，但不解析实际的标头或正文。
详情查看官方api

<!-- 引入 -->
### server
var http = require('http'); \
var onRequest = function(request, response) { \
    console.log('Request received'); \
    response.writeHead(200, { 'Content-Type': 'application/json' }); \
    // response.write('Hello from out application'); \
    var myObj = { \
        name: "itbaizhan", \
        job: "learn", \
        age: 27 \
    }; \
    response.end(JSON.stringify(myObj)); \
} \

###### 创建服务器
var server = http.createServer(onRequest);
###### 启动服务器
server.listen(3000, "127.0.0.1")


## npm

###### 安装依赖
npm install --save express
###### 查看安装的包
npm init

### express
Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。 \
使用 Express 可以快速地搭建一个完整功能的网站。
###### Express 框架核心特性：
可以设置中间件来响应 HTTP 请求。 \
定义了路由表用于执行不同的 HTTP 请求动作。 \
可以通过向模板传递参数来动态渲染 HTML 页面。

### nodemon
nodemon是一种工具，可以自动检测到目录中的文件更改时通过重新启动应用程序来调试基于node.js的应用程序。 \
###### 全局安装 npm install -g nodemon













