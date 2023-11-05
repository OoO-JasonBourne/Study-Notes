const arr = [1, 2, 1, 2, 'a', 'a']

// // indexOf includes,去重
// const arrN = new Array();

// for (let _ of arr) {
//     // if(arrN.indexOf(_) == -1){
//     if (!arrN.includes(_)) {
//         arrN.push(_)
//     }
// }



// // ES6 Set, map 去重
// console.log(Array.from(new Set(arr)))
// console.log([...new Set(arr)])

// console.log(arrN)

// // 键值对去重
// const unique = {}
// for(let _ of arr){
//     unique[_] = true;
// }
// console.log(Object.keys(unique))