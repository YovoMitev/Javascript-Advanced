let isOddOrEven = require('../OddEven').isOddOrEven;
let expect = require('chai').expect;

describe('test fundtion isOddOrEven ',function () {
    it('should return odd for pesho',function () {
        expect(isOddOrEven('pesho')).equal('odd')
    });
    it('should return even for gogo',function () {
        expect(isOddOrEven('gogo')).equal('even')
    });
    it('should return undefined for [1,2]',function () {
        expect(isOddOrEven([1,2])).undefined
    });
    it('should return undefined for {ivan:"Hay"}',function () {
        expect(isOddOrEven({ivan:"Hay"})).undefined
    });
    it('should return undefined for 3 ',function () {
        expect(isOddOrEven(3)).undefined
    });

});
