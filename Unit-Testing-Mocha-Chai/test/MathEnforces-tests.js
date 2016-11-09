let mathEnforcer = require('../MathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe('Test mathEnforces function',function () {
    let mathForc ;
    beforeEach('Create mathForc',function () {
        mathForc =  mathEnforcer
    });
    it('should return undefined for ..',function () {
        expect(mathForc.subtractTen()).undefined
    });
    it('should return undefined for ..',function () {
       expect(mathForc.addFive()).undefined
    });
    it('should return undefined for ..',function () {
        expect(mathForc.sum()).undefined
    });
    it('should return undefined for ..',function () {
        expect(mathForc.sum(12,6)).equal(18)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.sum(0.04,1.12)).equal(0.04+1.12)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.sum([1,2],1.12)).undefined
    });
    it('should return undefined for ..',function () {
        expect(mathForc.sum(1,{gosoh:2})).undefined
    });
    it('should return undefined for ..',function () {
        expect(mathForc.sum('asd',3)).undefined
    });
    it('should return undefined for ..',function () {
        expect(mathForc.sum(3)).undefined
    });
    it('should return undefined for ..',function () {
        expect(mathForc.addFive(3)).equal(8)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.addFive(-3)).equal(2)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.addFive([1,'asd'])).undefined
    });
    it('should return undefined for ..',function () {
        expect(mathForc.addFive('asd')).undefined
    });
    it('should return undefined for ..',function () {
        expect(mathForc.addFive(0.13)).equal(5+0.13)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.addFive(0)).equal(5)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.subtractTen(0)).equal(-10)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.subtractTen(20)).equal(10)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.subtractTen(10)).equal(0)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.subtractTen(10.5)).equal(0.5)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.subtractTen(10.001)).equal(10.001-10)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.subtractTen("asd")).undefined
    });
    it('should return undefined for ..',function () {
        expect(mathForc.subtractTen([1,14])).undefined
    });
    it('should return undefined for ..',function () {
        expect(mathForc.subtractTen({})).undefined
    });
    it('should return undefined for ..',function () {
        expect(mathForc.sum(0.01,0.01)).equal(0.01+0.01)
    });
    it('should return undefined for ..',function () {
        expect(mathForc.subtractTen(-10)).equal(-20);
    });
});