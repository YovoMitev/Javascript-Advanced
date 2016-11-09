let result = (function () {
    let uniqueId = 0;

    return class Extensible{
        constructor(){
            this.id = uniqueId++;
        }
        extend(temp){
            for(let prop in temp){
                if (typeof temp[prop] == 'function') {
                    Extensible.prototype[prop] = temp[prop];
                } else {
                    this[prop] = temp[prop];
                }
            }
        }
    }
})();

//result IIFE return class Extensible
console.log(typeof result);
let obj1 = new result();
obj1.age = 12;
console.log(obj1);
let obj2 = new result();
console.log(obj1.id);
console.log(obj2.id);
console.log(Object.getPrototypeOf(obj2));
console.log(result.prototype);

    //Another one problem solve
// (function () {
//     let uniqueId = 0;
//
//     return class Extensible{
//         constructor(){
//             this.id = uniqueId++;
//         }
//         extend(temp){
//             for(let prop in temp){
//                 if(typeof temp[prop] =='function'){
//                     Object.getPrototypeOf(this)[prop] = temp[t];
//                 }
//                 else
//                     this[prop] = temp[prop];
//             }
//         }
//     }
//
// })();