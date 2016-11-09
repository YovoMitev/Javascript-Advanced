let rgbToHexColor = require('../RGBtoHex').rgbToHexColor;
let expect = require('chai').expect;

 describe('Test rgb(num1,num2,num3)',function () {
    it('should return #7A8D33 for (122,141,51)',function () {
        expect(rgbToHexColor(122,141,51)).equal('#7A8D33');
    });
     it('should return #000000 for (0,0,0)',function () {
         expect(rgbToHexColor(0,0,0)).equal('#000000');
     });
     it('should return #FFFFFF for (255,255,255)',function () {
         expect(rgbToHexColor(255,255,255)).equal('#FFFFFF');
     });
     it('should return undefined for (142.5,123.41,213.131)',function () {
         expect(rgbToHexColor(142.5,123.41,213.131)).undefined
     });
     it('should return undefined for ("4","kiro",3)',function () {
         expect(rgbToHexColor("4","kiro",3)).undefined
     });
     it('should return undefined for (-1,0,3)',function () {
         expect(rgbToHexColor(-1,0,3)).undefined
     });
     it('should return undefined for (12, 13, 14) ',function () {
         expect(rgbToHexColor(12, 13, 14)).equal('#0C0D0E')
     });
     it('should return undefined for () ',function () {
         expect(rgbToHexColor()).undefined
     });
     it('should return undefined on rgbToHexColor(0, 34)', () => {
         expect(rgbToHexColor(0, 34)).to.be.undefined;
     });
     it('should return undefined on rgbToHexColor(255, 255, 256)', () => {
         expect(rgbToHexColor(255, 255, 256)).to.be.undefined;
     });
 })

//console.log(rgb(142.5,123.41,213.131));

//#000000 for 0 0 0
//#FFFFFF for 255 255 255