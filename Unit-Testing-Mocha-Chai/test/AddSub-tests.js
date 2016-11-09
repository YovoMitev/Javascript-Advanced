let createCalculator = require('../AddSub').createCalculator;
let expect = require('chai').expect;

describe("Test creaceCalc function",function () {
    let calc;
    beforeEach('Create instance',function () {
        calc =  createCalculator()
    });
    it('should return object for ()',function () {
        expect(calc).an('object')
    });
    it('should return 5 for add(3) add 2',function () {
        calc.add(5);
        expect(calc.get()).equal(5)
    });
    it('should return 2 for add(5) sub 3',function () {
        calc.add(5);
        calc.subtract(3);
        expect(calc.get()).equal(2)
    });
    it('should return -5 for sub 5',function () {
        calc.subtract(5);
        expect(calc.get()).equal(-5)
    });
    it('should return 5 for add 1.5 add 4.5 sub 1 ',function () {
        calc.add(1.5);
        calc.add(4.5);
        calc.subtract(1);
        expect(calc.get()).equal(5)
    });
    it('should return NaN for [1,2] ',function () {
        calc.add([1,2]);
        expect(calc.get()).NaN
    });
    it('should return 0 for get ',function () {

        expect(calc.get()).equal(0)
    });
    it('should return NaN for sub [1,2] ',function () {
        calc.subtract([1,2]);
        expect(calc.get()).NaN
    });
    it('should return NaN for sub "pesho" ',function () {
        calc.subtract('pesho');
        expect(calc.get()).NaN
    });
    it('should return 10 for sub -10 ',function () {
        calc.subtract(-10);
        expect(calc.get()).equal(10);
    });
    it('should have add, subtract, get functions', () => {
        expect(calc.hasOwnProperty('add')).to.be.true;
        expect(calc.hasOwnProperty('subtract')).to.be.true;
        expect(calc.hasOwnProperty('get')).to.be.true;
    });
    it('should return 3 for sub -10 ',function () {
        calc.subtract(1.5);
        calc.subtract(1.5);
        expect(calc.get()).equal(-3);
    });
    it('should return 0.30000000000000004 on {add 0.1, add 0.2, get}', () => {
        calc.add(0.1);
        calc.add(0.2);
        expect(calc.get()).to.equal(0.1 + 0.2);
    });
});
