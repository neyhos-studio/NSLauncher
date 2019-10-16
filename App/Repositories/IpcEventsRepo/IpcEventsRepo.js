"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IpcEventsRepo = (function () {
    function IpcEventsRepo() {
        this.ipc = require('electron').ipcRenderer;
    }
    IpcEventsRepo.prototype.LauncherUpdater = function () { this.ipc.send('load-page-launcher-updater'); };
    ;
    IpcEventsRepo.prototype.Authentication = function () { this.ipc.send('load-page-authentication'); };
    ;
    IpcEventsRepo.prototype.VerificationCode = function () { this.ipc.send('load-page-verification-code'); };
    ;
    IpcEventsRepo.prototype.MainFrame = function () { this.ipc.send('load-page-main-frame'); };
    ;
    return IpcEventsRepo;
}());
exports.default = IpcEventsRepo;
