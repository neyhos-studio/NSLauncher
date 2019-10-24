"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var FramesPath_1 = require("./App/Core/Constantes/FramesPath/FramesPath");
var path = require('path');
var Main = (function () {
    function Main() {
    }
    Main.CreateNSWin = function () {
        Main.NSWin = new electron_1.BrowserWindow({
            width: 1024,
            height: 640,
            frame: false,
            resizable: false,
            fullscreen: false,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                nodeIntegration: true
            },
        });
        Main.NSWin.loadFile(FramesPath_1.default.Authentication);
        Main.NSWin.on('closed', function () {
            Main.NSWin = null;
        });
    };
    Main.main = function (app, browserWindow) {
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('ready', function () {
            Main.CreateNSWin();
        });
        Main.application.on('window-all-closed', function () {
            if (process.platform !== 'darwin')
                Main.application.quit();
        });
        Main.application.on('activate', function () {
            if (Main.NSWin === null)
                Main.CreateNSWin();
        });
    };
    ;
    return Main;
}());
exports.default = Main;
;
