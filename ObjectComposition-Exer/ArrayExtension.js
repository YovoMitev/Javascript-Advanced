(function () {

    Array.prototype.last = function () {
        return this[this.length-1];
    };
    Array.prototype.sum = function () {
        return this.reduce((a,b) => a+b);
    };
    Array.prototype.take = function (n) {
       return this.slice(0,n);
    };
    Array.prototype.skip = function (n) {
        return this.filter(e => e!=n);
    };
    Array.prototype.average = function () {
        return (this.sum()/this.length);
    };


})();
console.log([10,5,5,10].take(2));