class Person {
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log(`My name is ${this.name}`)
    }
}



class Student extends Person{
    constructor(name, score){ 
        super(name)
        this.score = score;
    }
    study(){
        console.log(`${this.name} 的 score is ${this.score}分。`)
    }
}

const student = new Student('小明', 90); 
console.log('student: ', student)
student.introduce()
student.study()


class Teacher extends Person{
    constructor(name, subject){ 
        super(name)
        this.subject = subject;
    }
    teach(){
        console.log(`${this.name} 教 ${this.subject}课。`)
    }
}

const teacher = new Teacher('王老师', '语文'); 
console.log('teacher: ', teacher)
teacher.introduce()
teacher.teach()