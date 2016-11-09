class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius*2;
    }
    set diameter(d){
        this.radius = d/2;
    }
    get area(){
        return Math.PI * (this.radius*this.radius);
    }
}
let c = new Circle(3);
c.diameter = 60;
console.log(c)
console.log(c.diameter)
console.log(c.radius)
console.log(c.area)