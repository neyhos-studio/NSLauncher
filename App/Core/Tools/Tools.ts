import { setTimeout } from "timers";

export default class Tools{

    static disableButtons = ()=>{
        let btnList = document.getElementsByTagName('button');
        let li = Array.prototype.slice.call(btnList);
        li.forEach(element => {
            element.disabled = true;
        });
    }
    static enableButtons = ()=>{
        let btnList = document.getElementsByTagName('button');
        let li = Array.prototype.slice.call(btnList);
        li.forEach(element => {
            element.disabled = false;
        });
    }

    static showModale = (message) => {
        const modale = document.getElementsByTagName('error-message')[0];
        modale.textContent = message;
        modale.classList.contains('hide') ? modale.classList.remove('hide') : null;
        Tools.enableButtons();
        Tools.hideModaleAsync(5000);
    }  

    static hideModale = ():void => {
        const modale = document.getElementsByTagName('error-message')[0];
        !modale.classList.contains('hide') ? modale.classList.add('hide') : null;
    }

    static hideModaleAsync = async (ms) => {
        await Tools.sleep(ms);
        const modale = document.getElementsByTagName('error-message')[0];
        !modale.classList.contains('hide') ? modale.classList.add('hide') : null;
    }
    
    static sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static validateEmail = (email:string):boolean => {
        const result:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return result.test(String(email).toLowerCase());
    }

    static validateSymbole = (string:string):boolean => {
        const result:RegExp = /\\|\|\(|\)|\[|\]|\;|\:|\"|\'|\/|\<|\>|\&|\%|\*|\!|\?|\{|\}/;
        return result.test(String(string));
    }

    static validatePassword = (string:string):boolean => {
        var result:RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return result.test(string);
    }

}