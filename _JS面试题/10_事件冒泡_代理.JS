/**
 * 事件冒泡
 * 当一个元素接收到事件的时候，开始时由具体的元素接收，然后逐级向上传播到DOM最顶层节点。
 */


function childHandle(e) {
    console.log('点击了按钮')
    // e = e || window.event;
    if (e && e.stopPropagation) {
        e.stopPropagation() 
        console.log(1)
    } else {
        console.log(1)
        window.event.cancelBubble = true
    }

}

function parentHandle() {
    console.log('父级事件也被触发')
}


/**
 *  事件代理
 */

function clickFunc(e){
    e = e || window.event;
    const li = e.srcElement || e.target
    
    console.log(e)
    console.log(li.dataset)
}

const a = 1;

const b = (typeof c) || 1;

console.log(b)
