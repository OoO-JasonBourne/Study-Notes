class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.result = null;
        this.reason = null;
        executor(this.resolve.bind(MyPromise), this.reject.bing(MyPromise));
    }
    // resolve方法
    resolve(result) {
        if (this.state === 'pending') {
            this.state = 'fulfilled';
            this.result = result;
        }
    }
    // reject方法
    reject(reason) {
        if (this.state === 'pending') {
            this.state = 'rejected';
            this.reason = reason;
        }
    }
    // then方法
    
}