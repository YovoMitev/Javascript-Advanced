function solve() {
    //2 solution just create Person class.
    class Person{
        constructor(fName,lName,age,email){
            this.firstName = fName;
            this.lastName = lName;
            this.age = age;
            this.email = email;
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    //getPerson function for 3 solution.
    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com'),
    ];
}
console.log(solve());
// let ivan = new Person('ivan','ivanov',12,'ivan@ivan.bg');
// console.log(ivan);
// console.log(ivan.toString());