/**
 * 1. 暂时性死区
 */
// console.log(typeof b)
// foo(typeof a);
// function foo(p) {
//     console.log(this);
//     console.log(p);
//     console.log(typeof b);
//     let b;
// }

/**
 * 2. class 类 ES6
 */
// class Foo {
//     constructor(arr) {
//         this.arr = arr;
//     }
//     bar(n) {
//         return this.arr.slice(0, n);
//     }
// }
// var f = new Foo([0, 1, 2, 3]);      // f = {arr: [0, 1, 2, 3], bar: function(n){return ...}}
// console.log(f.bar(1));      // [0]
// console.log(f.bar(2).splice(1, 1));     // [1]
// console.log(f.arr);     // [0, 1, 2, 3]

/**
 * 3. 描述打印内容
 */
// function f(count) {
//   console.log(`foo${count}`);
//   setTimeout(() => {
//     console.log(`bar${count}`);
//   });
// }
// f(1);
// f(2);
// setTimeout(() => {
//   f(3);
// });

// /**
//  *  foo1
//  *  foo2
//  *  bar1
//  *  bar2
//  *  foo3
//  *  bar3
//  */

/**
 * 4. 描述打印内容
 */
// var a = 2;
// var b = 5;
// console.log(a === 2 || 1 && b === 3 || 4);

/**
 * 5. 描述执行结果
 */
// export class ButtonWrapper {
//     constructor(domBtnEl, hash) {
//         this.domBtnEl = domBtnEl;
//         this.hash = hash;
//         this.bindEvent();
//     }
//     bindEvent() {
//         this.domBtnEl.addEventListener('click', this.clickEvent, false);
//     }
//     detachEvent() {
//         this.domBtnEl.removeEventListener('click', this.clickEvent);
//     }
//     clickEvent() {
//         console.log(`The hash of the button is: ${this.hash}`);
//     }
// }

/**
 * 5. 宏任务与微任务
 */

// const first = () => (new Promise((resolve, reject) => {
//     console.log(3);
//     let p = new Promise((resolve, reject) => {
//         console.log(7);
//         setTimeout(() => {
//             console.log(1);
//         }, 0);
//         setTimeout(() => {
//             console.log(2);
//             resolve(3);
//         }, 0)
//         resolve(4);
//     });
//     resolve(2);
//     p.then((arg) => {
//         console.log(arg, 5); // 1 bb
//     });
//     setTimeout(() => {
//         console.log(6);
//     }, 0);
// }))
// first().then((arg) => {
//     console.log(arg, 7); // 2 aa
//     setTimeout(() => {
//         console.log(8);
//     }, 0);
// });
// setTimeout(() => {
//     console.log(9);
// }, 0);
// console.log(10);

/**
 * 判断数据类型
 */
// console.log(Object.prototype.toString.call(1))
// console.log(Object.prototype.toString.call('1'))
// console.log(Object.prototype.toString.call(null))
// console.log(Object.prototype.toString.call(undefined))
// console.log(Object.prototype.toString.call([1, 2]))
// console.log(Object.prototype.toString.call({1:2}))
// console.log(Object.prototype.toString.call(function(){}))

const arr = [1,3,4, 2, 2, 2,1, 'a', 'a']
const arr1 = arr.filter((item, index, arrs) => {
    // arrs.indexOf(item) === index
    return arrs.indexOf(item) === index

})
// console.log(arr1)
const arr2 = new Set(arr)
// console.log([...arr2])

const arr3 = arr.reduce((prev, cur, index, arr) => {
    prev.indexOf(cur) === -1 && prev.push(cur)
    return prev
})
console.log(arr3)

