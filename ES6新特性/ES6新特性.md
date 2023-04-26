## Let 命令
1. let 声明变量, const 声明常量
2. var 关键字函数级作用域； let 块级作用域，只在代码块内有效 {}
3. 不存在变量提升， var 可以
4. 可重新赋值， 不可重复声明

（闭包 可以保存变量到内存中）

## const 命令
1. const 一旦声明，不可改变 —— 常量
2. const 声明必须进行初始化，不得留在之后赋值
3. const 也是块级作用域 {}
4. const 不存在变量提升
5. const 不可重复声明，不可重新赋值
6. 
## Destructuring 解构
## 变量的解构赋值_数组解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）

#### 数组解构赋值
数组的元素是按次序排列，一一对应
let a = 10;
let b = 20;
let c = 30;
let a = 10, b = 20, c = 30;

let [a, b, c] = [10, 20, 30];

#### 对象解构赋值
变量必须与属性同名,变量名必须与键值对中的键保持一致,次序可以颠倒
let {name, age} = {name: "LL", age: "18"}
console.log(name, age)
console.log(age, name)

###### 对象方法解构赋值
Math.random()   Math.abs()

let {random, abs} = Math;
console.log(random(), abs(-10))
等同于
console.log(Math.random(), Math.abs(-10))

###### 注意：在对象解构赋值中，不要使用已经声明的变量，若一定要用，如下 加 ()
let hello = "Hello";
let { hello } = {hello:"hello"}; // 报错
let hello = "Hello";
({ hello } = {hello:"hello"}); // 正确

###### 字符串扩展
###### 模板字符串
let url = "www.itbaizhan.com"
let h1 = "<a href='"+ url +"'>itbaizhan</a>"
let h2 = `<a href='${url}'>itbaizhan</a>`

###### 字符串方法
<!-- 新增方法 -->
###### 1. includes(), startsWith(), endsWith()

1.1. includes()：返回布尔值，表示是否找到了参数字符串
1.2. startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部
1.3. endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部

<!-- Examples -->
var str = "Hello World";
console.log(str.indexOf('w')); -> -1
console.log(str.includes('w')); -> false

###### 2. repeat()
repeat 方法返回一个新字符串，表示将原字符串重复 n 次
'x'.repeat(3);  //"xxx"

###### 3. padStart()，padEnd()
padStart() 用于头部补全， padEnd() 用于尾部补全
<!-- Examples -->
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

###### 4. trimStart()，trimEnd()
与 trim() 一致， trimStart() 消除字符串头部的空格， trimEnd() 消除尾部的空格

###### 5. at()
at() 方法接受一个整数作为参数，返回参数指定位置的字符，支持负索引（即倒数的位置）
<!-- 类似于通过索引查找字符 -->
const str = 'hello';
str.at(1) // "e"
str.at(-1) // "o"

## 数值扩展
###### 数值分隔符
let budget = 1_000_000_000_000;

###### Number.isFinite(), Number.isNaN()

###### Number.parseInt(), Number.parseFloat()
将全局方法 parseInt() 和 parseFloat() ，移植到 Number 对象上面，目的，是逐步减少全局性方法，使得语言逐步模块化。
等同于 parseInt(), parseFloat()

###### Number.isInteger()
Number.isInteger() 用来判断一个数值是否为整数

## Math 函数扩展
<!-- 新增了17个， 掌握其中常用的三个就行 -->
###### Math.trunc()  
Math.trunc 方法用于去除一个数的小数部分，返回整数部分

###### Math.sign()
Math.sign 方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值

###### Math.cbrt()
Math.cbrt() 方法用于计算一个数的立方根

#### 数组扩展_扩展运算符(spread)
var arr1 = [100, 200, 300]
for(let i = 0; i < arr1.length; i++){
    console.log(i)
}
使用扩展运算符（spread）展开：
且对数组内容没有要求，同样适用于二维数组和伪数组
console.log(...[100, 200, 300])

###### 合并数组
<!-- Examples -->
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]
// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]

###### 取最大值
<!-- Examples -->
// ES5 的写法
Math.max.apply(null, [14, 3, 77])
// ES6 的写法
Math.max(...[14, 3, 77])
// 等同于
Math.max(14, 3, 77);


## 数组方法
###### Array.from()
Array.from 方法用于将类数组转为真正的数组
<!-- 常见的类数组有三类： -->
1. arguments
2. 元素集合
3. 类似数组的对象

###### Array.of()
和构造函数相比，建议使用 Array.of()

Array.of() 方法用于将一组值，转换为数组
<!-- Examples -->
Array.of(3, 11, 8) // [3,11,8]

Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
Array.of(3) // [3]

###### copyWithin() 复制数组
接受3个参数
target（必需）：从该位置开始替换数据。
start（可选）：从该位置开始读取数据，默认为 0。
end（可选）：到该位置前停止读取数据，默认等于数组长度。
<!-- Examples -->
[1, 2, 3, 4, 5].copyWithin(0, 3)  // [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3, 4) // [4, 2, 3, 4, 5]

###### find() 和 findIndex()
数组实例的 find 方法，用于找出第一个符合条件的数组成员
注意: 参数是一个回调函数
<!-- Examples -->
[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10

[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2

###### fill()
fill() 方法使用给定值，填充一个数组

###### entries()，keys() 和 values()
keys() 是对键名的遍历、 values() 是对键值的遍历， entries() 是对键值对的遍历
<!-- Examples -->
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1
for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'
for (let [index, elem] of ['a',
'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"

## 对象的扩展
#### 属性简写
ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法
<!-- Examples -->
let name = 'Jason Bourne';
const user = {
    name,
    age: 20
}

#### 方法简写
const o = {
    method(){
        return "hello!"
    }
}
等同于
const o = {
    method: function(){
        return "Hello!";
    }
}

## 对象新增方法
###### Object.is()
<!-- ES5 比较两个值是否相等，只有两个运算符：相等运算符（ == ）和严格相等运算符（ === ）
它们都有缺点，前者会自动转换数据类型，后者的 NaN 不等于自身，以及 +0 等于 -0 。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等
ES6 提出“Same-value equality”（同值相等）算法，用来解决这个
问题。 Object.is 就是部署这个算法的新方法。它用来比较两个值是否
严格相等，与严格比较运算符（===）的行为基本一致 -->
不同之处只有两个：一是 +0 不等于 -0 ，二是 NaN 等于自身
<!-- Examples -->
Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

###### Object.assign()
Object.assign() 方法用于对象的合并
<!-- Examples -->
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

###### Object.keys()，Object.values()，Object.entries()
<!-- Examples -->
let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };
for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}
for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}
for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1],
['b', 2], ['c', 3]
}

## 运算符扩展
###### 指数运算符 （ ** ）
注意： 右结合， 先右后左
<!-- Examples -->
2 ** 3 // 8
2 ** 3 ** 2     // 512
// 相当于 2 ** (3 ** 2)
指数运算符可以与等号结合，形成一个新的赋值运算符（ **= ）
a **= 4
等同于
a = a * a * a * a
a = a ** 4

###### 链判断运算符（optional chaining operator） ?. 
<!-- Examples -->
// 错误的写法
const  firstName = message.body.user.firstName || 'default';
// 正确的写法
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';
//链判断运算符
const firstName = message?.body?.user?.firstName || 'default';

###### 逻辑赋值运算符
<!-- Examples -->
// 或赋值运算符
x ||= y
// 等同于
x || (x = y)
// 与赋值运算符
x &&= y
// 等同于
x && (x = y)
// Null 赋值运算符
x ??= y
// 等同于
x ?? (x = y)

## 函数的扩展
###### 函数参数默认值
<!-- Examples -->
// ES6之前
function log(info) {
    info = info || 'World';
    console.log(info);
}
log();
// ES6
function log(info = 'world') {
    console.log(info);
}
log();

## 函数扩展 箭头函数 =>
<!-- Examples -->
// 函数
var demo = function(x){
    return x
}
function demo(x){
    return x;
}
// ES6
var demo = (x) => x
如果没有参数： var demo = () => x
两个参数：
var add = function(x, y){
    var z = 100;
    return x+y+z
};
// ES6
var add = (x, y) => {
    var z = 100;
    return x+y+z
}

###### 回调函数 匿名函数
箭头函数最大的应用就是箭头函数和匿名函数
setTimeOut(function(){
    console.log('定时器')
})
// ES6
setTimeOut(() => {
    console.log('定时器')
})
<!-- 注意 -->
使用注意点
1. 箭头函数没有自己的 this 对象
2. 不可以当作构造函数，也就是说，不可以对箭头函数使用 new 命令，否则会抛出一个错误
3. 不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替
4. 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数

###### rest 参数
ES6 引入 rest 参数（形式为 ...变量名 ），用于获取函数的多余参数，这样就不需要使用 arguments 对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中
<!-- Examples -->
function add(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
 }
  return sum;****
}
add(2, 5, 3) // 10

###### name属性
函数的 name 属性，返回该函数的函数名
function foo() {}
foo.name // "foo"










































































































