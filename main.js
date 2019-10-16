"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var electron_2 = require("electron");
var FramesPath_1 = require("./App/Core/Constantes/FramesPath/FramesPath");
var path = require('path');
var Main = (function () {
    function Main() {
    }
    Main.createDevWindow = function () {
        Main.devWindow = new electron_1.BrowserWindow({
            width: 350,
            height: 300,
            frame: false,
            resizable: false,
            fullscreen: false,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                nodeIntegration: true
            },
        });
        Main.devWindow.loadFile('index.html');
        Main.devWindow.webContents.openDevTools();
        Main.devWindow.on('closed', function () {
            Main.devWindow = null;
        });
    };
    Main.createUpdaterWindows = function () {
        Main.updaterWindows = new electron_1.BrowserWindow({
            width: 350,
            height: 180,
            frame: false,
            resizable: false,
            fullscreen: false,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                nodeIntegration: true
            },
        });
        Main.updaterWindows.loadFile(FramesPath_1.default.Updater);
        Main.updaterWindows.webContents.openDevTools();
        Main.updaterWindows.on('closed', function () {
            Main.updaterWindows = null;
        });
    };
    Main.createAuthenticationWindow = function () {
        Main.authenticationWindow = new electron_1.BrowserWindow({
            width: 350,
            height: 300,
            frame: false,
            resizable: false,
            fullscreen: false,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                nodeIntegration: true
            },
        });
        Main.authenticationWindow.loadFile(FramesPath_1.default.Authentication);
        Main.authenticationWindow.webContents.openDevTools();
        Main.authenticationWindow.on('closed', function () {
            Main.authenticationWindow = null;
        });
    };
    Main.createVerificationCodeWindow = function () {
        Main.verificationCodeWindow = new electron_1.BrowserWindow({
            width: 350,
            height: 240,
            frame: false,
            resizable: false,
            fullscreen: false,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                nodeIntegration: true
            },
        });
        Main.verificationCodeWindow.loadFile(FramesPath_1.default.VerificationCode);
        Main.verificationCodeWindow.on('closed', function () {
            Main.verificationCodeWindow = null;
        });
    };
    Main.createMainFrameWindow = function () {
        Main.mainFrameWindow = new electron_1.BrowserWindow({
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
        Main.mainFrameWindow.loadFile(FramesPath_1.default.MainFrame);
        Main.mainFrameWindow.on('closed', function () {
            Main.mainFrameWindow = null;
        });
    };
    Main.main = function (app, browserWindow) {
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('ready', function () { Main.createDevWindow(); });
        Main.application.on('window-all-closed', function () {
            if (process.platform !== 'darwin')
                Main.application.quit();
        });
        Main.application.on('activate', function () {
            if (Main.devWindow === null)
                Main.createDevWindow();
            if (Main.updaterWindows === null)
                Main.createUpdaterWindows();
            if (Main.authenticationWindow === null)
                Main.createAuthenticationWindow();
            if (Main.verificationCodeWindow === null)
                Main.createVerificationCodeWindow();
            if (Main.mainFrameWindow === null)
                Main.createMainFrameWindow();
        });
        electron_2.ipcMain.on('load-page-launcher-updater', function () { Main.createUpdaterWindows(); });
        electron_2.ipcMain.on('load-page-authentication', function () { Main.createAuthenticationWindow(); });
        electron_2.ipcMain.on('load-page-verification-code', function () { Main.createVerificationCodeWindow(); });
        electron_2.ipcMain.on('load-page-main-frame', function () { Main.createMainFrameWindow(); });
    };
    ;
    return Main;
}());
exports.default = Main;
;
