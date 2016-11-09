let lookupChar = require('../CharLookup').lookupChar;
let expect = require('chai').expect;

describe("Test function lookupChar",function () {
   it('should return m for promom,3',function () {
       expect(lookupChar('promom',3)).equal('m')
   });
    it('should return r for rambo,0',function () {
        expect(lookupChar('rambo',0)).equal('r')
    });
    it('should return o for promo,4',function () {
        expect(lookupChar('promo',4)).equal('o')
    });
    it('should return undefined for [1,2],4',function () {
        expect(lookupChar([1,2],4)).undefined
    });
    it('should return o for promo,4',function () {
        expect(lookupChar({inva:2},4)).undefined
    });
    it('should return o for 4,4',function () {
        expect(lookupChar(4,4)).undefined
    });
    it('should return o for promo,[1,2]',function () {
        expect(lookupChar('ororo',[1,2])).undefined
    });
    it('should return o for promo,promo]',function () {
        expect(lookupChar('ororo',"promo")).undefined
    });
    it('should return o for promo,{}]',function () {
        expect(lookupChar('ororo',{})).undefined
    });
    it('should return o for promo,2,2]',function () {
        expect(lookupChar('ororo',2.2)).undefined
    });
    it('should return msg for promo,2,2]',function () {
        expect(lookupChar('ororo',13)).equal('Incorrect index')
    });
    it('should return msg for promo,-2]',function () {
        expect(lookupChar('sadasd',-2)).equal('Incorrect index')
    });
});