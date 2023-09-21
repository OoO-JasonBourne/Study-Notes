class EventBus{
    constructor(){
        this.eventObj = {}; // 用于存储所有订阅事件
    }
    // 订阅事件(注册)
    $on(name, callback){
        if(!this.eventObj[name]){
            this.eventObj[name] = []
        }
        this.eventObj[name].push(callback)
    }
    // 发布事件(触发)
    $emit(name, ...args){
        if(!this.eventObj.hasOwnProperty(name)){
            console.log('未绑定该事件')
            return
        }
        const eventList = this.eventObj[name];
        for(const event of eventList){
            event(...args)
        }
    }
}

// 初始化
let eb = new EventBus();

// 订阅事件(注册)
eb.$on('key1', function(arg){
    console.log('key1', arg)
});
eb.$on('key2', function(arg){
    console.log('key2', arg)
})

// 发布事件(触发)
eb.$emit('key1', '0')
eb.$emit('key2', 'fafd')
eb.$emit('key3')






// 移除


// 监听