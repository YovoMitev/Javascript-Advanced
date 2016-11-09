class Stringer {
    constructor(str,len){
        this.str = str;
        this.length = len
    }
    get innerString(){
        return this.str
    }
    get innerLength(){
        return this.length
    }
    increase(len) {
       this.length+=len;
    }

    decrease(len) {
      this.length = Math.max(0,this.length-len)
    }
    toString(){
        if (this.length >= this.str.length)
            return this.str;
        if (this.length == 0)
            return '...';
        return this.str.substr(0, this.length) + '...';
    }
}
let s = new Stringer('ivan',5);
s.increase(4);
s.decrease(121);
s.decrease(-145);
console.log(s.toString());
