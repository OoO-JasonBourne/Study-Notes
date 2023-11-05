// let li = document.getElementsByTagName('li');
// for(let i = 0; i < li.length; i++){
//     li[i].addEventListener('click', function(){
//         // console.log(`点击了${i}事件`)
//         console.log(li[i].innerHTML)
//     })
// }


// 事件代理-委托
let ul = document.getElementById("ul");
ul.addEventListener('click', (event) => {
    console.log(event.target.innerHTML)
})