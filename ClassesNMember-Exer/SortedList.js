class SortedList{
    constructor(){
        this.storage = [];
        this.size = 0;
    }

    reSort(){
        return this.storage.sort((a,b)=>a-b);
    }
    add(elem){
        this.storage.push(elem);
        this.reSort();
        this.size = this.storage.length;
    }
    remove(index){
        if(this.storage[index] != undefined)
            this.storage.splice(index,1);
        this.reSort();
        this.size = this.storage.length;
    }
    get(index){
        if(this.storage[index] != undefined)
            return this.storage[index];
    }
}
let list = new SortedList();
list.add(4);
list.add(2);
console.log(list.size);
console.log(list.get(1));
list.remove(0);
console.log(list);