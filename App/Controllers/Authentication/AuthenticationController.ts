import Credentials from "../../Entities/Credentials/Credentials";
import Token from "../../Entities/Token/Token";
import User from "../../Entities/User/User";
import SessionUser from "../../Entities/SessionUser/SessionUser";
import IpcEventsRepo from "../../Repositories/IpcEventsRepo/IpcEventsRepo";
import FramesPath from "../../Core/Constantes/FramesPath/FramesPath";
import Tools from "../../Core/Tools/Tools";
import AuthenticationMapper from "../Mappers/AuthenticationMapper";

export default class AuthenticationController{


    constructor(){}


    private getUserAPI(token: Token){

        fetch('http://92.222.80.11:5000/api/Utilisateur/RetrieveUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
        .then(res => res.json())
        .then(res => {
            let user = AuthenticationMapper.getUser(res);
            // TODO 
            // let session = require('electron').remote.getCurrentWindow().webContents.session;
        })
        .catch(error => Tools.showModale(error));
    }

    public getConnectionAPI = (credentials: Credentials) => {      

        // verify user inputs
        let verifyUserInput: Boolean = !Tools.validateEmail(credentials.email) || Tools.validateSymbole(credentials.email) || Tools.validateSymbole(credentials.password) ? false : true;

        if (verifyUserInput) {
            fetch('http://92.222.80.11:5000/api/Connexion/Connection', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            .then(res => res.json())
            .then(res => {
                // Case we have an error during the query
                if (res.hasError) {

                    // Case user is banned
                    if (res.error.hasBanned !== null && res.error.hasBanned == true) {
                        let dateFin = res.error.endFormalize;  // date format = "23.10.2019-20:21:44",
                        let dateArray = dateFin.split('-');
                        let date = dateArray[0];
                        let heure = dateArray[1];
                        let raison = res.error.reason;
                        let message = "T'es ban jusqu'au " + date + " à " + heure + " Cause :" + raison;  
                        Tools.showModale(message);
                    // Case error ?
                    } else {
                        let message = res.error;
                        Tools.showModale(message);
                    }
                
                // Case success
                } else { 
                    this.getUserAPI(new Token(res.response)); 
                    require('electron').remote.getCurrentWindow().loadFile(FramesPath.MainFrame);
                }
            })
            .catch(error => Tools.showModale(error));  
        } else {
            Tools.showModale("*not valide character in input field");
        }
    }

    
}