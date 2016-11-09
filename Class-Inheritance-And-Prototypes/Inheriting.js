
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }
    class Teacher extends Person{
        constructor(name,email,sub){
            super(name,email);
            this.subject = sub;
        }
        toString(){
            return super.toString().slice(0,-1) + `, subject: ${this.subject})`;
        }

    }
    class Student extends Person{
        constructor(name,email,course){
            super(name,email);
            this.course = course
        }
        toString(){
            return super.toString().slice(0,-1) + `, course: ${this.course})`;
        }

    }


let p = new Person('A','B');
let teacher = new Teacher("Iovo",'Mitev','Software pentaLevel exp');
console.log(p.toString());
    console.log(teacher.toString());
