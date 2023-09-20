function Person(){
    this.name = 'name'
    this.friends = ['friends']
    this.getFriends = () => {
        console.log(this.friends)
    }
}

Person.prototype.h = [18, 6];
Person.prototype.func = function(){
    console.log('原型方法')
}


/**
 * 原型链继承
 */
function Student(){}
Student.prototype = new Person()
const stu1 = new Student()
stu1.name = 'haha'
stu1.friends.push('U')
stu1.h.push('U')
console.log(stu1.h)
stu1.getFriends()


const stu2 = new Student()
console.log(stu2.h)
stu2.getFriends()


// function Student2(){}
// Student2.prototype = new Person()
// const stu2 = new Student2()
// console.log(stu2.friends)

/**
 * 盗用构造函数继承
 */
// function Student(){
//     Person.call(this, 'xiaoming', ['h', 'l'])
// }
// const stu1 = new Student()
// console.log(stu1.age)

/**
 * 组合式继承
 */
// function Student(){
//     Person.apply(this, ['LL', ['l', 'h']])
// }
// Student.prototype = new Person();

// const stu1 = new Student()
// console.log(stu1.age)



/**
 * 寄生式组合式继承
 */
// function Student(){
//     Person.apply(this, ['LL', ['l', 'h']])
// }

// const Fn = function(){}
// Fn.prototype = Person.prototype
// Student.prototype = new Fn();

// const stu1 = new Student()
// console.log(stu1.age)


