function request(num){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 3)
        })
    })
}

// request(1).then(res => {
//     console.log(res)
//     request(res).then((res1) => {
//         console.log(res1)
//     })
// }){

async function fn(){
    const res = await request(1);
    console.log(res)
    const res1 = await request(res)
    console.log(res1)
    return res1
}
fn()
console.log(fn())

const obj = {
    name: 'w',
    age: 1
}

arr = [3, 5,6 ]
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value)
})