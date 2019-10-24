import Credentials from "../../Entities/Credentials/Credentials";
import Token from "../../Entities/Token/Token";
import User from "../../Entities/User/User";
import SessionUser from "../../Entities/SessionUser/SessionUser";
import Main from "../../../Main";
import { remote } from "electron";
import IpcEventsRepo from "../../Repositories/IpcEventsRepo/IpcEventsRepo";
import FramesPath from "../../Core/Constantes/FramesPath/FramesPath";

export default class AuthenticationController{

    constructor(){}

    private validateEmail(email):boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    private validateSymbole(str):boolean {
        const re = /\\|\|\(|\)|\[|\]|\;|\:|\"|\'|\/|\<|\>|\&|\%|\*|\!|\?|\{|\}/;
        return re.test(String(str));
    }
    private validatePassword(str):boolean
    {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(str);
    }
    private displayModale(message):any{
        let modale = document.getElementsByTagName('error-message')[0];
        modale.textContent = message;
        
        if (modale.classList.contains('hide'))
            modale.classList.remove('hide');
        else
            modale.classList.add('hide');
    }
    private returnUser(token: Token){
        const xhr2 = new XMLHttpRequest();
        xhr2.open('POST', 'http://92.222.80.11:5000/api/Utilisateur/RetrieveUser');
        xhr2.setRequestHeader('Content-Type', 'application/json');
        xhr2.send(JSON.stringify(token));
    
        xhr2.onload = function() {
            let objectJson = JSON.parse(xhr2.response);
            
            //mapping user
            let user = new User();
            user.nickname = objectJson.response.pseudo;
            user.onlineStatus = objectJson.response.status;
            user.ip = objectJson.response.ip;
            user.token = token;

            //TODO
            let events = new IpcEventsRepo();
            let session:SessionUser = events.GetSession()
            console.log(session);
            //session.setUser(user);

        }
    }

    public connection(email: string, password: string){
        let verrif = true;
        const connect = new Credentials(email, password);
        const xhr = new XMLHttpRequest();


        if(!this.validateEmail(connect.email) || this.validateSymbole(connect.email)){
            verrif = false;
        }else if(this.validateSymbole(connect.password)){
            verrif = false;
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 0) {
                console.log("erreur")
            }
        };

        if(verrif){
            try{
                xhr.open('POST', 'http://92.222.80.11:5000/api/Connexion/Connection'); 
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(connect));

                xhr.onload = () => {
                    let objectJson = JSON.parse(xhr.response)
                    let authClass = new AuthenticationController();

                    if(objectJson.hasError){
                        //TODO
                        if(objectJson.error === null){
                            let dateFin = objectJson.response.endFormalize;  //"finForm": "23.10.2019-20:21:44",
                            let dateArray = dateFin.split('-');
                            let date = dateArray[0];
                            let heure = dateArray[1];

                            let raison = objectJson.response.reason;
                            let message = "T'es ban jusqu'au " + date + " à " + heure + " Cause :" + raison;
                            
                            authClass.displayModale(message);
                        }else{
                            authClass.displayModale(objectJson.error);
                        }
                    }else{
                        let token = new Token(objectJson.response); 
                        this.returnUser(token); 

                        require('electron').remote.getCurrentWindow().loadFile(FramesPath.MainFrame);
                        //events.MainFrame();

                        //require('electron').remote.getCurrentWindow().close();
                    }
                }
            }catch(error){
                console.log(error)
            }
            
        }
    }
}