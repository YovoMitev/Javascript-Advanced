class Rat{
    constructor(name){
        this.name = name;
        this.rats =[];
    }
    unite(other){
        if(other instanceof Rat){
            this.rats.push(other);
        }
    }
    getRats(){
        return this.rats
    }
    toString() {
        let output = '';
        output += this.name + '\n';
        for (let rat of this.rats) {
            output += `##${rat}\n`;
        }

        return output.trim();
    }
}
let r1 = new Rat('ivan');
console.log(r1);
console.log(r1.getRats());
let r2 = new Rat("gosoh");
r1.unite(r2);
console.log(r1.getRats());
console.log(r2.toString());
