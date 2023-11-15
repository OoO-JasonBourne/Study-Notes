// let i = 0

// function fn(){
//     i++
//     console.log(`函数调用了${i}次`)
// }



// 闭包形式
function fn(){
    let i = 0
    function fun(){
        i++
        console.log(`函数调用了${i}次`)
    }
    return fun
}

const handle = fn();

handle()