// 定义一个构造函数  称为 T
function Test(){}

// T的原型 属性和方法
Test.prototype.name = 'Test'
Test.prototype.func = function(){
    console.log(this.name)
}

// 构造一个 Test 的实例 test
const test = new Test({});

// 实例将会通过指针 __proto__ 指向 Test 的原型
console.log(test.__proto__) // 隐式原型
console.log(Test.prototype) // 显示原型
console.log(test.__proto__ == Test.prototype)

console.log(Object.__proto__ == Function.prototype)

console.log('_________________________')


console.log(Test.hasOwnProperty('name'))
console.log(test.hasOwnProperty('name'))