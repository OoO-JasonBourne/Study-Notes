// 数组排序

const arr = [];
for (let i = 0; i * 2 < 10; i++) {
  arr.push(i * 2);
}
for (let i = 0; i * 2 < 12; i++) {
  arr.push(i * 2);
}
console.log(arr);

const arr1 = arr.reduce((prev, cur, index) => {
  //   console.log(Object.prototype.toString.call(prev));
  //   prev.indexOf(cur) === -1 && prev.push(cur);
  if (prev.indexOf(cur) === -1) {
    prev.push(cur);
  }
  return prev;
}, []);
console.log(arr1);


console.log(arr.toString())
console.log({name: 'w'}.toString())

function add(a, b){
  return a + b
}
console.log(add(1, 2, 4))