"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentsPath_1 = require("../../Core/Constantes/ComponentsPath/ComponentsPath");
var User_1 = require("../../Entities/User/User");
var OnlineStatus_1 = require("../../Core/Enumerators/OnlineStatus/OnlineStatus");
var ComponentsLoader = (function () {
    function ComponentsLoader() {
    }
    ;
    ComponentsLoader.MinimizeCurrentWindow = function () {
        require('electron').remote.getCurrentWindow().minimize();
    };
    ;
    ComponentsLoader.CloseCurrentWindow = function () {
        require('electron').remote.getCurrentWindow().close();
    };
    ;
    ComponentsLoader.LoadWindowManager = function () {
        var HTML_FILE_TO_LOAD = ComponentsPath_1.default.WindowManager;
        Array.prototype.slice.call(document.getElementsByTagName('window-manager')).forEach(function (element) {
            fetch(HTML_FILE_TO_LOAD)
                .then(function (response) { return response.text(); })
                .then(function (text) { return element.innerHTML += text; })
                .finally(function () {
            });
        });
    };
    ;
    ComponentsLoader.LoadFriendItem = function (element, friend) {
        var HTML_FILE_TO_LOAD = ComponentsPath_1.default.FriendItem;
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) {
            var nickname = friend.nickname.toString();
            var status = friend.onlineStatus.toString();
            switch (status) {
                case '0':
                    status = "Online";
                    break;
                case '1':
                    status = "Absent";
                    break;
                case '2':
                    status = "Busy";
                    break;
                case '3':
                    status = "Offline";
                    break;
                case '4':
                    status = "Banned";
                    break;
            }
            text = text.replace('${{nickname}}', nickname);
            text = text.replace('${{status}}', status);
            element.innerHTML += text;
        });
    };
    ;
    ComponentsLoader.LoadFriendList = function (element) {
        var _this = this;
        var userFriendList = new Array();
        var u1 = new User_1.default();
        u1.nickname = "User 1";
        u1.onlineStatus = OnlineStatus_1.OnlineStatus.Online;
        var u2 = new User_1.default();
        u2.nickname = "User 2";
        u2.onlineStatus = OnlineStatus_1.OnlineStatus.Absent;
        var u3 = new User_1.default();
        u3.nickname = "User 3";
        u3.onlineStatus = OnlineStatus_1.OnlineStatus.Busy;
        var u4 = new User_1.default();
        u4.nickname = "User 4";
        u4.onlineStatus = OnlineStatus_1.OnlineStatus.Offline;
        var u5 = new User_1.default();
        u4.nickname = "User 5";
        u4.onlineStatus = OnlineStatus_1.OnlineStatus.Banned;
        var u6 = new User_1.default();
        u3.nickname = "User 3";
        u3.onlineStatus = OnlineStatus_1.OnlineStatus.Busy;
        var u7 = new User_1.default();
        u4.nickname = "User 4";
        u4.onlineStatus = OnlineStatus_1.OnlineStatus.Offline;
        var u8 = new User_1.default();
        u4.nickname = "User 5";
        u4.onlineStatus = OnlineStatus_1.OnlineStatus.Banned;
        var u9 = new User_1.default();
        u3.nickname = "User 3";
        u3.onlineStatus = OnlineStatus_1.OnlineStatus.Busy;
        var u10 = new User_1.default();
        u4.nickname = "User 4";
        u4.onlineStatus = OnlineStatus_1.OnlineStatus.Offline;
        var u11 = new User_1.default();
        u4.nickname = "User 5";
        u4.onlineStatus = OnlineStatus_1.OnlineStatus.Banned;
        userFriendList.push(u1);
        userFriendList.push(u2);
        userFriendList.push(u3);
        userFriendList.push(u4);
        userFriendList.push(u5);
        userFriendList.push(u6);
        userFriendList.push(u7);
        userFriendList.push(u8);
        userFriendList.push(u9);
        userFriendList.push(u10);
        userFriendList.push(u11);
        userFriendList.forEach(function (friend) {
            _this.LoadFriendItem(element, friend);
        });
        var friendList = Array.prototype.slice.call(element.childNodes);
        friendList.forEach(function (friendElement) {
            friendElement.addEventListener('click', function () {
                var socialRight = document.getElementsByTagName('social-right')[0];
                _this.LoadFriendChat(socialRight);
            });
        });
    };
    ;
    ComponentsLoader.LoadFriendChat = function (element) {
        var HTML_FILE_TO_LOAD = ComponentsPath_1.default.FriendChat;
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return element.innerHTML = text; })
            .finally(function () {
        });
    };
    ;
    ComponentsLoader.LoadPatchNote = function (element, markdown) {
        var HTML_FILE_TO_LOAD = ComponentsPath_1.default.PatchNote;
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return element.innerHTML += text; })
            .finally(function () {
        });
    };
    ;
    ComponentsLoader.LoadNewsCell = function (element) {
        var HTML_FILE_TO_LOAD = ComponentsPath_1.default.NewsCell;
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return element.innerHTML += text; })
            .finally(function () {
        });
    };
    ;
    ComponentsLoader.LoadListNewsCell = function (element) {
        for (var i = 0; i < 10; i++)
            this.LoadNewsCell(element);
    };
    ;
    ComponentsLoader.LoadDownloader = function (element) {
        var HTML_FILE_TO_LOAD = ComponentsPath_1.default.Downloader;
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return element.innerHTML += text; })
            .finally(function () {
        });
    };
    ;
    return ComponentsLoader;
}());
exports.default = ComponentsLoader;
;
