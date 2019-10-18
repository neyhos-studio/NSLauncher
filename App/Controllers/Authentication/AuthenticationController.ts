import Credentials from "../../Entities/Credentials/Credentials";

export default class AuthenticationController{

    constructor(){}

    private validateEmail(email):boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    // VERRIF SYMBOLE
    private validateSymbole(str):boolean {
        const re = /\\|\|\(|\)|\[|\]|\;|\:|\"|\'|\/|\<|\>|\&|\%|\*|\!|\?|\{|\}/;
        return re.test(String(str));
    }
    // VERRIF PASSWORD
    private validatePassword(str):boolean
    {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(str);
    }

    private test(message):any{
        let modale = document.getElementsByTagName('error-message')[0];
        modale.textContent = message;
        
        if (modale.classList.contains('hide'))
            modale.classList.remove('hide');
        else
            modale.classList.add('hide');
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
                xhr.open('POST', 'http://92.222.80.11:5000/api/Connexion/Connexion'); 
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(connect));
                let that = this;
                xhr.onload = function(that) {
                    let objectJson = JSON.parse(xhr.response)
                    // console.log(objectJson.hasError)     //L'objet renvois si oui ou non y'a eu une erreur
                    // console.log(objectJson.error)        //L'objet renvois l'erreur envoyé par le back
                    // console.log(objectJson.response)     //L'objet renvois la réponse, qui peut être un Objet d'objet, une string, ...

                    // if(objectJson.hasError){
                    //     //TODO
                    //     if(objectJson.error === null){
                    //         let dateFin = objectJson.response.finForm;  //"finForm": "23.10.2019-20:21:44",
                    //         let dateArray = dateFin.split('-');
                    //         let date = dateArray[0];
                    //         let heure = dateArray[1];

                    //         let raison = objectJson.response.raison;
                    //         let message = "T'es ban jusqu'au " + date + " à " + heure + " Cause :" + raison;
                    //         that.test(message);
                    //     }else{
                    //         test(objectJson.error);
                    //     }
                    // }else{
                    //     const token = Token(objectJson.response);
                    //     this.returnUser(token);
                    //     events.MainFrame();
                    //     require('electron').remote.getCurrentWindow().close();
                    // }
                }
            }catch(error){
                console.log(error)
            }
            
        }
    }

    private returnUser(token){
        const xhr2 = new XMLHttpRequest();
        xhr2.open('POST', 'http://92.222.80.11:5000/api/Utilisateur/RetournerUtilisateur');
        xhr2.setRequestHeader('Content-Type', 'application/json');
        xhr2.send(JSON.stringify(token));
    
        xhr2.onload = function() {
            let objectJson = JSON.parse(xhr2.response);
            console.log(objectJson);
        }
    }
}