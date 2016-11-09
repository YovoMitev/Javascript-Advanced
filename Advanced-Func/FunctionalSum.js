let add = (function solve() {
    let sum = 0;
    function add(num) {
        sum+=num;
        return add;
    }
    add.toString = () => sum;
    return add;
})();
console.log(add(6)(7).toString());