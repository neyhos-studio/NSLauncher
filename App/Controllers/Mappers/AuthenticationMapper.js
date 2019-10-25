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
        backendObject.response.friendList.array.forEach(function (backendFriend) {
            var friend = new User_1.default();
            friend.nickname = backendFriend.nickname;
            friend.onlineStatus = backendFriend.status;
            user.friendList.push(friend);
        });
        return user;
    };
    return AuthenticationMapper;
}());
exports.default = AuthenticationMapper;
