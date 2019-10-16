"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentsPath_1 = require("../../Core/Constantes/ComponentsPath/ComponentsPath");
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
    ComponentsLoader.LoadFriendItem = function (element) {
        var HTML_FILE_TO_LOAD = ComponentsPath_1.default.FriendItem;
        var friend = document.createElement('button');
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return friend.innerHTML += text; })
            .finally(function () {
            friend.className = "fx fx-row w100p h-light p10";
            friend.addEventListener('click', function () {
                var nickname = "*TEST";
            });
            element.appendChild(friend);
        });
    };
    ;
    ComponentsLoader.LoadFriendList = function (element) {
        for (var i = 0; i < 10; i++) {
            this.LoadFriendItem(element);
        }
        ;
    };
    ;
    ComponentsLoader.LoadFriendChat = function (element, nickname) {
        var HTML_FILE_TO_LOAD = ComponentsPath_1.default.FriendChat;
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return element.innerHTML += text; })
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
