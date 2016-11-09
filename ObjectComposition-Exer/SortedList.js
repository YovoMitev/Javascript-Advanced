function generateList() {

    return (function () {
        let storage = [];

        function reSort() {
            storage.sort((a,b) => a-b);
        }
        function add(elem) {
            storage.push(elem);
            reSort();
        }
        function remove(index) {
            if(storage[index]!=undefined) {
                storage.splice(index, 1);
                reSort();
            }
        }
        function getSize() {
            return storage.length
        }
        function get(index) {
            if(storage[index]!=undefined) {
                return storage[index];
            }
        }

        let obj = {add,remove,get};
        obj.__defineGetter__('size',getSize);

        return obj

    })();
}
let list = generateList();
list.add(3);
list.add(1);
list.add(4);
console.log(typeof list);
