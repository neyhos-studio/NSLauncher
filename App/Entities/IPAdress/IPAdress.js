"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IPAdress = (function () {
    function IPAdress() {
    }
    IPAdress.prototype.fromString = function (IpAdress) {
        var _this = this;
        try {
            var bytesString = IpAdress.split('.');
            if (bytesString.length > 4 || bytesString.length < 4)
                throw "IpAdress string is not well formed";
            bytesString.forEach(function (str) {
                var nbr = Number.parseInt(str);
                if (nbr <= 255 && nbr >= 0) {
                    _this.bytes.push(nbr);
                }
            });
        }
        catch (_a) {
            console.log("error during IPAdress.fromString()");
        }
        return this;
    };
    IPAdress.prototype.fromBytesArray = function (IpAdress) { return this; };
    IPAdress.prototype.toString = function () { };
    IPAdress.prototype.toBytesArray = function () { };
    return IPAdress;
}());
exports.default = IPAdress;
