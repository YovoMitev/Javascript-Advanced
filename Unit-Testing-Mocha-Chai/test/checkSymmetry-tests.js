let isSymmetric = require('../CheckForSymmetry').isSymmetric;
let expect = require('chai').expect;

 describe('test isSymmetric(arr)',function () {
    it('should return true for [1,2,4,2,1]',function () {
        expect(isSymmetric([1,2,4,2,1])).equal(true);
    });
     it('should return false for [1,2,4,1,2]',function () {
         expect(isSymmetric([1,2,4,1,2])).equal(false);
     });
     it('should return true for []',function () {
         expect(isSymmetric([])).equal(true);
     });
     it("should return true for ['pesho','gosho','ivan','gosho','pesho']",function () {
         expect(isSymmetric(['pesho','gosho','ivan','gosho','pesho'])).equal(true);
     });
     it("should return true for [1,2,1]",function () {
         expect(isSymmetric([1,2,1])).equal(true);
     });
     it("should return true for [1]",function () {
         expect(isSymmetric([1])).equal(true);
     });
     it("should return false for [1,2]",function () {
         expect(isSymmetric([1,2])).equal(false);
     });
     it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5] ",function () {
         expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5] )).equal(false);
     });
     it("should return false for 1,2,3,4 ",function () {
         expect(isSymmetric(1,2,3,4)).equal(false);
     });
     it("should return true for [1,2,2,1] ",function () {
         expect(isSymmetric([1,2,2,1])).equal(true);
     });
     it("should return false for [1,2,-1] ",function () {
         expect(isSymmetric([1,2,-1])).equal(false);
     });
     it("should return false for ['2',2] ",function () {
         expect(isSymmetric([2,'2'])).equal(false);
     });
     it('should return false on isSymmetric("hello")', () => {
         expect(isSymmetric("hello")).to.be.false;
     });
     it('should return true on isSymmetric([[1,2], [2], [1,2]])', () => {
         expect(isSymmetric([[1,2], [2], [1,2]])).to.be.true;
     });
 });
//console.log(isSymmetry([1,2,1]));