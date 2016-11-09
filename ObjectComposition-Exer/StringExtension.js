(function () {

    String.prototype.ensureStart = function (str) {
        if(!this.startsWith(str)){
            return str+this;
        }
        return this.toString();
    };
    String.prototype.ensureEnd = function (str) {
        if(!this.endsWith(str)){
            return this+str ;
        }
        return this.toString();
    };
    String.prototype.isEmpty = function () {
        if(this=='')
            return true;
        return false
    };
    String.prototype.truncate = function (n) {
        if(this.length<=n)
            return this.toString();
        if (!this.includes(' '))
            return this.slice(0,n-3) + '...';
        
        let tokens = this.split(' ');
        let result = tokens[0];

        for (let i = 1; i < tokens.length; i++) {
            if (result.length + tokens[i].length + 4 > n) {
                return result + '...'
            }
            result += ' ' + tokens[i]
        }
    };
    
    String.format = function (str, ...params) {
        return str.replace(/\{([\d]+)\}/g,function (m,g) {
            if(params[Number(g)]!= undefined)
                return params[Number(g)];
            return m;

        })
    }
})();
let str = 'The dreams come true when you belive in yourself';
console.log(String.format('Hello {0} my name is {1} {2}','ivna','iovo','Lizards'));