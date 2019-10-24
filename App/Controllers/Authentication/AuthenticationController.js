"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Credentials_1 = require("../../Entities/Credentials/Credentials");
var Token_1 = require("../../Entities/Token/Token");
var User_1 = require("../../Entities/User/User");
var IpcEventsRepo_1 = require("../../Repositories/IpcEventsRepo/IpcEventsRepo");
var FramesPath_1 = require("../../Core/Constantes/FramesPath/FramesPath");
var AuthenticationController = (function () {
    function AuthenticationController() {
    }
    AuthenticationController.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    AuthenticationController.prototype.validateSymbole = function (str) {
        var re = /\\|\|\(|\)|\[|\]|\;|\:|\"|\'|\/|\<|\>|\&|\%|\*|\!|\?|\{|\}/;
        return re.test(String(str));
    };
    AuthenticationController.prototype.validatePassword = function (str) {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(str);
    };
    AuthenticationController.prototype.displayModale = function (message) {
        var modale = document.getElementsByTagName('error-message')[0];
        modale.textContent = message;
        if (modale.classList.contains('hide'))
            modale.classList.remove('hide');
        else
            modale.classList.add('hide');
    };
    AuthenticationController.prototype.returnUser = function (token) {
        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', 'http://92.222.80.11:5000/api/Utilisateur/RetrieveUser');
        xhr2.setRequestHeader('Content-Type', 'application/json');
        xhr2.send(JSON.stringify(token));
        xhr2.onload = function () {
            var objectJson = JSON.parse(xhr2.response);
            var user = new User_1.default();
            user.nickname = objectJson.response.pseudo;
            user.onlineStatus = objectJson.response.status;
            user.ip = objectJson.response.ip;
            user.token = token;
            var events = new IpcEventsRepo_1.default();
            var session = events.GetSession();
            console.log(session);
        };
    };
    AuthenticationController.prototype.connection = function (email, password) {
        var _this = this;
        var verrif = true;
        var connect = new Credentials_1.default(email, password);
        var xhr = new XMLHttpRequest();
        if (!this.validateEmail(connect.email) || this.validateSymbole(connect.email)) {
            verrif = false;
        }
        else if (this.validateSymbole(connect.password)) {
            verrif = false;
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 0) {
                console.log("erreur");
            }
        };
        if (verrif) {
            try {
                xhr.open('POST', 'http://92.222.80.11:5000/api/Connexion/Connection');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(connect));
                xhr.onload = function () {
                    var objectJson = JSON.parse(xhr.response);
                    var authClass = new AuthenticationController();
                    if (objectJson.hasError) {
                        if (objectJson.error === null) {
                            var dateFin = objectJson.response.endFormalize;
                            var dateArray = dateFin.split('-');
                            var date = dateArray[0];
                            var heure = dateArray[1];
                            var raison = objectJson.response.reason;
                            var message = "T'es ban jusqu'au " + date + " à " + heure + " Cause :" + raison;
                            authClass.displayModale(message);
                        }
                        else {
                            authClass.displayModale(objectJson.error);
                        }
                    }
                    else {
                        var token = new Token_1.default(objectJson.response);
                        _this.returnUser(token);
                        require('electron').remote.getCurrentWindow().loadFile(FramesPath_1.default.MainFrame);
                    }
                };
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    return AuthenticationController;
}());
exports.default = AuthenticationController;
