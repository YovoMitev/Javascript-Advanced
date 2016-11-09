class Rectangle{
    constructor(w,h,color){
        this.width = w;
        this.height = h;
        this.color = color
    }
    calcArea(){
        return this.width*this.height;
    }
}

let r = new Rectangle(10,4,'red');
console.log(r);
console.log(r.calcArea());