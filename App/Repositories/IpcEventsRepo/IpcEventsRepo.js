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
    IpcEventsRepo.prototype.GetSession = function () {
        var session;
        this.ipc.send('get-session');
        session = this.ipc.on('reply-get-session', function (event, arg) {
            console.log(arg);
            return arg[0];
        });
        console.log(session);
        return session;
    };
    ;
    IpcEventsRepo.prototype.SetSession = function (session) { this.ipc.send('set-session', session); };
    ;
    return IpcEventsRepo;
}());
exports.default = IpcEventsRepo;
