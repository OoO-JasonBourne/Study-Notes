const arr = [34,432,54,0,6,43,6,43,64,62,4,5,5]

// 1. 冒泡排序
// function bubbleSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[i]){
//                 // const temp = arr[j];
//                 // arr[j] = arr[i]
//                 // arr[i] = temp
//                 // 解构赋值写法
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
                
//             }
//         }
//     }
//     return arr
// }
// // bubbleSort(arr)
console.log(bubbleSort(arr))


function bubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
