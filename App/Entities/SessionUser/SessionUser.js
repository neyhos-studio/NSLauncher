"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SessionUser = (function () {
    function SessionUser() {
    }
    SessionUser.Create = function () {
        return new SessionUser();
    };
    SessionUser.getUser = function () {
        return this.user;
    };
    SessionUser.setUser = function (user) {
        this.user = user;
    };
    return SessionUser;
}());
exports.default = SessionUser;
