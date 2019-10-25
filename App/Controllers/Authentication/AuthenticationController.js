"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = require("../../Entities/Token/Token");
var FramesPath_1 = require("../../Core/Constantes/FramesPath/FramesPath");
var Tools_1 = require("../../Core/Tools/Tools");
var AuthenticationMapper_1 = require("../Mappers/AuthenticationMapper");
var AuthenticationController = (function () {
    function AuthenticationController() {
        var _this = this;
        this.getConnectionAPI = function (credentials) {
            var verifyUserInput = !Tools_1.default.validateEmail(credentials.email) || Tools_1.default.validateSymbole(credentials.email) || Tools_1.default.validateSymbole(credentials.password) ? false : true;
            if (verifyUserInput) {
                fetch('http://92.222.80.11:5000/api/Connexion/Connection', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(credentials)
                })
                    .then(function (res) { return res.json(); })
                    .then(function (res) {
                    if (res.hasError) {
                        if (res.error.hasBanned !== null && res.error.hasBanned == true) {
                            var dateFin = res.error.endFormalize;
                            var dateArray = dateFin.split('-');
                            var date = dateArray[0];
                            var heure = dateArray[1];
                            var raison = res.error.reason;
                            var message = "T'es ban jusqu'au " + date + " à " + heure + " Cause :" + raison;
                            Tools_1.default.showModale(message);
                        }
                        else {
                            var message = res.error;
                            Tools_1.default.showModale(message);
                        }
                    }
                    else {
                        _this.getUserAPI(new Token_1.default(res.response));
                        require('electron').remote.getCurrentWindow().loadFile(FramesPath_1.default.MainFrame);
                    }
                })
                    .catch(function (error) { return Tools_1.default.showModale(error); });
            }
            else {
                Tools_1.default.showModale("*not valide character in input field");
            }
        };
    }
    AuthenticationController.prototype.getUserAPI = function (token) {
        fetch('http://92.222.80.11:5000/api/Utilisateur/RetrieveUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(function (res) { return res.json(); })
            .then(function (res) {
            var user = AuthenticationMapper_1.default.getUser(res);
        })
            .catch(function (error) { return Tools_1.default.showModale(error); });
    };
    return AuthenticationController;
}());
exports.default = AuthenticationController;
