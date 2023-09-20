/**
 * 1. 原型链继承
 *      利用原型让一个引用类型继承另一个引用类型的属性和方法
 *      核心： 子类的原型等于 父类的实例
 *              Children.prototype = new Parent()
 * 优点：
 * 缺点：1. 父类所有的引用类型数据（对象、数组）会被子类共享，更改另一个子类的数据，会影响其它子类数据
 *       2. 子类实例不能给父类构造函数传参
 */

/**
 * 2. 构造函数继承
 *          在子类型的构造函数的内部调用超类型构造函数，通过 apply，call 方法实现
 *      核心：
 * 优点：1. 父类引用类型的数据不会被子类共享，改变其中一个不会影响另一个
 *       2. 可以在在类型构造函数中向超类型构造函数传递参数
 * 缺点：无法继承父类原型上的属性和方法
 */

/**
 * 3. 组合式继承 （伪经典继承）
 *          使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承
 *      核心：
 *              function Children(){Parent.call(this)}
 *              Children.prototype = new Parent()
 * 优点：
 * 缺点：   会调用两次父类的构造函数
 *          一次是在创建子类原型时调用，另一次是在子类构造函数中调用
 */

/**
 * 4. 寄生组合式继承 （圣杯继承）
 *          使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。
 *          不通过调用父类构造函数来给子类原型赋值，而是取得父类原型的一个副本，然后将返回的新对象赋值给子类原型
 *      核心：
 *              function Children(){Parent.call(this)}
 *              function Fn = function(){}
 *              Fn.prototype = Parent.prototype
 *              Children.prototype = new Fn();
 * 优点：
 * 缺点：
 */

/**
 * ES6 class继承
 */


/**
 * 
 1、函数声明和类声明的区别
函数声明会提升，类声明不会。首先需要声明你的类，然后访问它，否则像下面的代码会抛出一个ReferenceError。
js复制代码let p = new Rectangle(); 
// ReferenceError

class Rectangle {}

2、ES5继承和ES6继承的区别

ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上（Parent.call(this)）.
ES6的继承有所不同，实质上是先创建父类的实例对象this，然后再用子类的构造函数修改this。
因为子类没有自己的this对象，所以必须先调用父类的super()方法，否则新建实例报错


 */
















/**
 * 1. 原型链继承
 *      利用原型让一个引用类型继承另一个引用类型的属性和方法
 *      核心： 子类的原型等于 父类的实例
 *              Children.prototype = new Parent()
 * 优点：
 * 缺点：1. 父类所有的引用类型数据（对象、数组）会被子类共享，更改另一个子类的数据，会影响其它子类数据
 *       2. 子类实例不能给父类构造函数传参
 */

// // 定义一个父类
// function Parent(){
//     this.name = 'xiaoming';
//     this.friends = ['w', 'm'];
//     this.getName = () => {
//         console.log(this.name)
//     }
// }
// Parent.prototype.age = 18;
// Parent.prototype.getFri = () => {
//     console.log("父类原型方法")
// }
// // 定义子类
// function Children(){}

// // 子类的原型 等于 父类的实例
// Children.prototype = new Parent()

// const stu1 = new Children()
// stu1.name = 'xiaohong'
// stu1.friends.push('e')
// console.log(stu1.name)
// console.log(stu1.friends)
// console.log(stu1.age)
// stu1.getFri()

// console.log('---------')

// const stu2 = new Children()
// // console.log(stu2)
// console.log(stu2.name)
// console.log(stu2.friends)
// stu1.getFri()

/**
 * 2. 构造函数继承
 *          在子类型的构造函数的内部调用超类型构造函数，通过 apply，call 方法实现
 *      核心：
 * 优点：1. 父类引用类型的数据不会被子类共享，改变其中一个不会影响另一个
 *       2. 可以在在类型构造函数中向超类型构造函数传递参数
 * 缺点：无法继承父类原型上的属性和方法
 */

// // 定义一个父类
// function Parent(name){
//     this.name = name;
//     this.friends = ['w', 'm'];
//     this.getName = () => {
//         console.log(this.name)
//     }
// }
// Parent.prototype.age = 18
// Parent.prototype.getFri = () => {
//     console.log("父类原型方法")
// }
// // 定义子类
// function Children(){
//     Parent.call(this, 'xiaoming')
// }

// const stu1 = new Children()
// stu1.name = 'l';
// stu1.friends.push('e')
// console.log(stu1.name)
// console.log(stu1.friends)

// const stu2 = new Children()
// console.log(stu2.name)
// console.log(stu2.friends)
// stu1.getName()

/**
 * 3. 组合式继承 （伪经典继承）
 *          使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承
 *      核心：
 *              function Children(){Parent.call(this)}
 *              Children.prototype = new Parent()
 * 优点：
 * 缺点：   会调用两次父类的构造函数
 *          一次是在创建子类型原型的时候，一次是在子类型构造函数内部
 */
//// 定义一个父类
// function Parent() {
//   this.name = "xiaoming";
//   this.friends = ["w", "m"];
//   this.getName = () => {
//     console.log(this.name);
//   };
//   this.getFri = () => {
//     console.log(this.friends);
//   };
// }
// Parent.prototype.age = 18;
// Parent.prototype.getPar = () => {
//   console.log("父类原型方法");
// };

// // 定义一个子类
// function Children() {
//     Parent.call(this)
// };
// Children.prototype = new Parent();
// const stu1 = new Children()
// console.log(stu1)
// stu1.name = 'xiaohong'
// stu1.friends.push('e')
// stu1.age = '19'

// console.log(stu1.name)
// console.log(stu1.friends)
// stu1.getName()
// stu1.getFri()
// console.log(stu1.age)
// stu1.getPar()

// console.log('--------------')

// const stu2 = new Children()
// console.log(stu2.name)
// console.log(stu2.friends)
// stu1.getName()
// stu1.getFri()
// console.log(stu2.age)
// stu1.getPar()

/**
 * 4. 寄生组合式继承 （圣杯继承）
 *          使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。
 *      核心：
 *              function Children(){Parent.call(this)}
 *              function Fn = function(){}
 *              Fn.prototype = Parent.prototype
 *              Children.prototype = new Fn();
 * 优点：
 * 缺点：
 */
// // 定义一个父类
// function Parent() {
//   this.name = "xiaoming";
//   this.friends = ["w", "m"];
//   this.getName = () => {
//     console.log(this.name);
//   };
//   this.getFri = () => {
//     console.log(this.friends);
//   };
// }
// Parent.prototype.age = 18;
// Parent.prototype.getPar = () => {
//   console.log("父类原型方法");
// };

// // 定义一个子类
// function Children() {
//   Parent.call(this);
// }
// function Fn(){}
// Fn.prototype = Parent.prototype;
// Children.prototype = new Fn();

// const stu1 = new Children();
// console.log(stu1);
// stu1.name = "xiaohong";
// stu1.friends.push("e");
// stu1.age = "19";

// console.log(stu1.name);
// console.log(stu1.friends);
// stu1.getName();
// stu1.getFri();
// console.log(stu1.age);
// stu1.getPar();

// console.log("--------------");

// const stu2 = new Children();
// console.log(stu2.name);
// console.log(stu2.friends);
// stu2.getName();
// stu2.getFri();
// console.log(stu2.age);
// stu2.getPar();

/**
 * ES6 class继承
 */
class Parent {
  constructor() {
    this.name = "ll";
    this.friends = ["cc", "ww"];
    this.getFri = function () {
      console.log(this.friends);
    };
  }
  getPar() {
    console.log("原型");
  }
}

class Children1 extends Parent {}
class Children2 extends Parent {}

const stu1 = new Children1();
stu1.friends.push('aa')
console.log(stu1.name);
console.log(stu1.friends);
stu1.getFri()
stu1.getPar()

console.log('-----------')
const stu2 = new Children2()
console.log(stu2.name);
console.log(stu2.friends);
stu1.getFri()
stu1.getPar()


