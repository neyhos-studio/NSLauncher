var electron_1 = require("electron");
var Main = require("../../../../Main");

const form = document.getElementById('connection-form');   //recuperation form
let email = document.getElementById('email');              //recup email
let password = document.getElementById('password');        //recup mdp
const connexion = document.getElementById('connexion');    //

// VERRIF EMAIL
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// VERRIF SYMBOLE
function validateSymbole(str) {
    const re = /\\|\|\(|\)|\[|\]|\;|\:|\"|\'|\/|\<|\>|\&|\%|\*|\!|\?|\{|\}/;
    return re.test(String(str));
}
// VERRIF PASSWORD
function validatePassword(str)
  {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  }

  // CREATION OBJ CONNEXION
function Connexion(email, password) {
    let obj = {};
    obj.email = email;
    obj.password = password;

    return obj;
}

// FUNCTION CONNEXION ONCLICK
connexion.onclick = function(){  
    
    let verrif = true;
    const connect = Connexion(email.value, password.value);
    const xhr = new XMLHttpRequest();

    if(!validateEmail(connect.email) || validateSymbole(connect.email)){
        verrif = false;
    }else if(validateSymbole(connect.password)){
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
    
            xhr.onload = function() {
                let objectJson = JSON.parse(xhr.response)
                // console.log(objectJson.hasError)     //L'objet renvois si oui ou non y'a eu une erreur
                // console.log(objectJson.error)        //L'objet renvois l'erreur envoyé par le back
                console.log(objectJson.response)     //L'objet renvois la réponse, qui peut être un Objet d'objet, une string, ...

                if(objectJson.hasError){
                    //TODO
                    console.log(objectJson.error);
                } else {
                    //TODO
                    console.log(Main.default.createMainFrameWindow);
                    Main.default.createMainFrameWindow(electron_1.app, electron_1.BrowserWindow);
                    // require('electron').remote.getCurrentWindow().close();
                }
              }
        }catch(error){
            console.log(error)
        }
        
    }
    

}
    