// 口述数组去重方法
const arr = [1, 2, 3, 4, 5, "哈哈", 4, 5, "哈哈", 1, 2, 3];


/**
 * 1. indexOf 去重， includes
 */
// 创建了一个新的空数组 arr1，用于存储去重后的元素。
// 使用 for 循环遍历原始数组 arr 的每个元素。
// 在每次迭代中，使用 indexOf 方法来检查 arr1 数组中是否已经包含了当前元素。arr1.indexOf(arr[i]) 将返回元素在 arr1 中的索引，如果元素不在 arr1 中，indexOf 会返回 -1。
// 如果 indexOf 返回 -1，表示当前元素在 arr1 中不存在，那么就将当前元素添加到 arr1 数组中，以实现去重。

const arr1 = Array();
for (let i = 0; i < arr.length; i++) {
  if (arr1.indexOf(arr[i]) == -1) {
    arr1.push(arr[i])
  }
}
console.log(arr1)

/**
 * 2. ES6 set 去重
 */
// 使用 new Set(arr) 创建了一个新的 Set 对象，这个 Set 对象会自动去重。Set 对象只会包含数组 arr 中的不重复的元素。
// 使用扩展运算符 ... 将 Set 对象转换为一个新的数组，并将其赋值给 arr1
const arr3 = [...new Set(arr)]
console.log(arr2)


/**
 * 3. 键值对去重
 */
// 要基于对象键值对进行去重，你可以利用对象的属性（键）的唯一性。这种方法适用于需要去除数组中的重复元素，但保留一个唯一的示例的情况。
const unique = {};
for (let i = 0; i < arr.length; i++) {
    unique[arr[i]] = true;
}
console.log(Object.keys(unique))

/**
 * 4. reduce 去重
 */