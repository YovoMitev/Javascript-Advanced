function solve() {
    let obj = Object.create({});

    obj.extend = function (temp) {
        for (let prop in temp){
            if(typeof temp[prop] == 'function')
                Object.getPrototypeOf(obj)[prop] = temp[prop]
            else
                obj[prop] = temp[prop];
        }
    };
    return obj
}