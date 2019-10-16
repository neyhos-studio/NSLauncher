"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FramesPath = (function () {
    function FramesPath() {
    }
    ;
    FramesPath.Updater = process.cwd() + '/App/Web/Views/Updater/launcher-updater.html';
    FramesPath.Authentication = process.cwd() + '/App/Web/Views/Authentication/launcher-authentication.html';
    FramesPath.VerificationCode = process.cwd() + '/App/Web/Views/Authentication/launcher-verification-code.html';
    FramesPath.MainFrame = process.cwd() + '/App/Web/Views/MainFrame/launcher-main-frame.html';
    return FramesPath;
}());
exports.default = FramesPath;
