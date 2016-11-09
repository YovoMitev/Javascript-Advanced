let obj = require('../AddDelInList-unit').list;
let expect = require('chai').expect;

describe('exam preparation unit test',function () {
    // let list;
    //  beforeEach(function () {
    //      list = (function () {
    //          let data = [];
    //          return {
    //              add: function (item) {
    //                  data.push(item);
    //              },
    //              delete: function (index) {
    //                  if (Number.isInteger(index) && index >= 0 && index < data.length) {
    //                      return data.splice(index, 1)[0];
    //                  } else {
    //                      return undefined;
    //                  }
    //              }, toString: function () {
    //                  return data.join(", ");
    //              }
    //          };
    //      })();
    //  });

    it('asd',function () {
        expect(list).an('object');
        expect(typeof list.add).to.equal('function');
        expect(list.toString()).to.equal('');
        list.add(5);
        expect(list.toString()).to.equal('5');
    });
    it('asdh',function () {
        list.add(1);
        list.add(2);
        expect(list.toString()).equal('1, 2');
        list.add({});
        list.add(false);
        expect(list.toString()).equal('1, 2, [object Object], false');

    });
    it('asdb',function () {
        list.add(2);
        expect(list.delete(4)).undefined
    });
    it('asde',function () {
        list.add(2);
        list.add(22);
        list.add(24);
        expect(list.delete(-24)).undefined
        expect(list.delete(2)).equal(24)
        expect(list.delete(2.2)).undefined
    });
    it('asd',function () {
        list.add(2);
        list.add(22);
        list.add(24);
        expect(list.delete('asd')).undefined
    });
    it('asd',function () {

        expect(list.delete(0)).undefined
    });
    it('asd',function () {
        list.add(2);
        list.add('ivan');
        list.add([1,2]);
        expect(list.toString()).equal('2, ivan, 1,2');
        list.delete(1);
        expect(list.toString()).equal('2, 1,2');

    });
    it('',function () {
        expect(list.hasOwnProperty('delete')).true
        expect(list.hasOwnProperty('add')).true
        expect(list.hasOwnProperty('toString')).true
    });
    it('should work correctly on this complex test', () => {
        list.add(1);
        list.add('test');
        list.add(141);
        list.add(false);
        expect(list.toString()).equal('1, test, 141, false')
    });

    it('',function () {
        list.add(1);
        list.add('Gosho');
        expect(list.delete([1,2])).undefined;
        expect(list.delete({a:2,f:'asd'})).undefined;
        expect(list.delete(() => {})).undefined;
    })
});