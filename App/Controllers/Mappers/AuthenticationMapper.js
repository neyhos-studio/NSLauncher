"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../../Entities/User/User");
var AuthenticationMapper = (function () {
    function AuthenticationMapper() {
    }
    AuthenticationMapper.getUser = function (backendObject) {
        var user = new User_1.default();
        user.nickname = backendObject.response.pseudo;
        user.onlineStatus = backendObject.response.status;
        user.ip = backendObject.response.ip;
        user.token = backendObject.response.token;
        return user;
    };
    return AuthenticationMapper;
}());
exports.default = AuthenticationMapper;
