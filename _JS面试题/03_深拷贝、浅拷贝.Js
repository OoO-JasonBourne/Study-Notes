/**
 * 手写深拷贝
 */
const oldObj = {
    name: 'w',
    age: 18,
    address: ['N', 'S'],
    friend: {
        name: '老新'
    }
}
// // 复制 newObj1
// const newObj1 = oldObj;
// newObj1.name = 'ww'
// newObj1.friend.name = '小新'
// console.log('oldObj', oldObj)


// 浅拷贝 newObj2
// 最外层的属性保持不变,里面的属性依旧有联系,会相互改变
function shallowCopy(obj){
    if(typeof obj !== 'object' || obj == null){
        return obj;
    }

    let result;

    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }

    for(let key in obj){
        result[key] = obj[key]
    }
    
    return result;
}
// const newObj2 = shallowCopy(oldObj);
// newObj2.name = 'WW';
// newObj2.friend.name = '小新'
// console.log('oldObj', oldObj)
// console.log('浅拷贝newObj2:\n', newObj2)


// 深拷贝
// 所有层的属性相互独立，互不影响

function deepCopy(obj){
    if(typeof obj != 'object' || obj == null){
        return obj
    }

    let result;

    if(obj instanceof Array){
        result = []
    } else {
        result = {}
    }

    for(let key in obj){
        if (obj.hasOwnProperty(key)){
            result[key] = deepCopy(obj[key]);
        }
    }

    return result;
}

const newObj3 = deepCopy(oldObj);
newObj3.name = 'WW';
newObj3.friend.name = '小新'
console.log('oldObj', oldObj)
console.log('深拷贝newObj3:\n', newObj3)
