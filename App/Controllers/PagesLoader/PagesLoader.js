"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PagesPath_1 = require("../../Core/Constantes/PagesPath/PagesPath");
var ComponentsLoader_1 = require("../ComponentsLoader/ComponentsLoader");
var PagesLoader = (function () {
    function PagesLoader() {
    }
    PagesLoader.PageLoad_NSMMO = function () {
        var HTML_FILE_TO_LOAD = PagesPath_1.default.NS_Mmo;
        var PAGE_HOLDER = document.getElementsByTagName('page')[0];
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return PAGE_HOLDER.innerHTML = text; })
            .finally(function () {
            ComponentsLoader_1.default.LoadPatchNote(document.getElementsByTagName('patch-note')[0], 'filename');
            ComponentsLoader_1.default.LoadListNewsCell(document.getElementsByTagName('news-tab')[0]);
            ComponentsLoader_1.default.LoadDownloader(document.getElementsByTagName('downloader')[0]);
        });
    };
    PagesLoader.PageLoad_Profil = function () {
        var HTML_FILE_TO_LOAD = PagesPath_1.default.Profil;
        var PAGE_HOLDER = document.getElementsByTagName('page')[0];
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return PAGE_HOLDER.innerHTML = text; })
            .finally(function () {
        });
    };
    PagesLoader.PageLoad_Home = function () {
        var HTML_FILE_TO_LOAD = PagesPath_1.default.Home;
        var PAGE_HOLDER = document.getElementsByTagName('page')[0];
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return PAGE_HOLDER.innerHTML = text; })
            .finally(function () {
        });
    };
    PagesLoader.PageLoad_Social = function () {
        var HTML_FILE_TO_LOAD = PagesPath_1.default.Social;
        var PAGE_HOLDER = document.getElementsByTagName('page')[0];
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return PAGE_HOLDER.innerHTML = text; })
            .finally(function () {
            var friends = document.getElementsByTagName('friends')[0];
            if (friends !== null)
                ComponentsLoader_1.default.LoadFriendList(friends);
        });
    };
    PagesLoader.PageLoad_Store = function () {
        var HTML_FILE_TO_LOAD = PagesPath_1.default.Store;
        var PAGE_HOLDER = document.getElementsByTagName('page')[0];
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return PAGE_HOLDER.innerHTML = text; })
            .finally(function () {
        });
    };
    PagesLoader.PageLoad_LauncherPatch = function () {
        var HTML_FILE_TO_LOAD = PagesPath_1.default.LauncherPatch;
        var PAGE_HOLDER = document.getElementsByTagName('page')[0];
        fetch(HTML_FILE_TO_LOAD)
            .then(function (response) { return response.text(); })
            .then(function (text) { return PAGE_HOLDER.innerHTML = text; })
            .finally(function () {
            ComponentsLoader_1.default.LoadPatchNote(document.getElementsByTagName('patch-note')[0], 'filename');
        });
    };
    return PagesLoader;
}());
exports.default = PagesLoader;
