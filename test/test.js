if (typeof module !== 'undefined' && module.exports) {
    console.info('Running in NodeJS');
    var ColorPicker = require('../js/colorPicker');
    var expect = require('expect');
} else { // Browser
    console.info('Running in browser');
    global = window;
    // libs provided via <script>
}

describe('Conversion', function () {
    it('should convert hsv to hsl', function () {
        expect(ColorPicker.prototype.hsvToHsl({
            h: 100,
            s: 1,
            v: 1
        })).toEqual({
            h: 100,
            s: 1,
            l: 0.5
        });
    });
    it('should convert hsl to hsv', function () {
        expect(ColorPicker.prototype.hslToHsv({
            h: 100,
            s: 1,
            l: 0.5
        })).toEqual({
            h: 100,
            s: 1,
            v: 1
        });
    });
    it('should convert rgb to hsv', function () {
        expect(ColorPicker.prototype.rgbToHsv({
            r: 255,
            g: 255,
            b: 255
        })).toEqual({
            h: 0,
            s: 0,
            v: 1
        });
    });
    it('should convert hsv to rgb', function () {
        expect(ColorPicker.prototype.hsvToRgb({
            h: 0,
            s: 0,
            v: 1
        })).toEqual({
            r: 255,
            g: 255,
            b: 255
        });
    });
    it('should convert hsv to hex', function () {
        expect(ColorPicker.prototype.hsvToHex({
            h: 100,
            s: 0.2,
            v: 0.5
        })).toEqual('6f8066');
    });
    it('should convert rgb to hex', function () {
        expect(ColorPicker.prototype.rgbToHex({
            r: 255,
            g: 255,
            b: 255
        })).toEqual('ffffff');
    });
    it('should convert hex to rgb', function () {
        expect(ColorPicker.prototype.hexToRgb('ffffff')).toEqual({
            r: 255,
            g: 255,
            b: 255
        });
    });
});
