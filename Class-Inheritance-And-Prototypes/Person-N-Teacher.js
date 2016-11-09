function solve() {
    class Person{
        constructor(name,email){
            this.name = name
            this.email = email
        }
    }
    class Teacher extends Person{
        constructor(name,email,sub){
            super(name,email);
            this.subject = sub;
        }
    }
    return {Person,Teacher}
}
let p = new Person('asd','asd');
let t = new Teacher('a','b','js');
console.log(p);
console.log(t);
console.log( );