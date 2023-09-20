// class Example { 
//     constructor(name) { 
//       this.name = name;
//     }
//     init() { 
//       const fun = () => { console.log(this.name) }
//       fun(); 
//     } 
//   }
// const e = new Example('Hello');
// e.init();

// ES5写法
function Example(name){
    this.name = name
}

Example.prototype.init = function() {
    var _this = this;
    var fun = function(){
        console.log(_this.name)
    }
    fun()
}

var e = new Example('Hello')
e.init()