let sum = require('../sumNums').sum;
let expect = require('chai').expect;

describe('Test sum func',function () {
   it('should return 3 for [1,2]',function () {
      expect(sum([1,2])).to.be.equal(3);
   });
    it('should return 0 for []',function () {
        expect(sum([])).equal(0);
    });
    it('should return NaN for ["pesho","Gosho"]',function () {
        expect(sum(['pesho','gosho'])).to.be.NaN;
    });
});

