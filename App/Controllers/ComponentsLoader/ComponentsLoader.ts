import ComponentsPath from "../../Core/Constantes/ComponentsPath/ComponentsPath";
import User from "../../Entities/User/User";
import { OnlineStatus } from "../../Core/Enumerators/OnlineStatus/OnlineStatus";
import { stat } from "fs";


export default class ComponentsLoader {    

    constructor(){
    };

    static MinimizeCurrentWindow(): void {
        require('electron').remote.getCurrentWindow().minimize();
    };
    static CloseCurrentWindow(){
        require('electron').remote.getCurrentWindow().close();
    };
    static LoadWindowManager(){
        const HTML_FILE_TO_LOAD = ComponentsPath.WindowManager;

        // Transform colletion into list of html elements
        Array.prototype.slice.call(document.getElementsByTagName('window-manager')).forEach(element => {  
            
            // HTML Injection
            fetch(HTML_FILE_TO_LOAD)
            .then( response => response.text() )
            .then( text => element.innerHTML += text)
            .finally(()=>{
                // When the component is load
                // Process here

            });

        });

    };
    static LoadFriendItem(element, friend: User){
        const HTML_FILE_TO_LOAD =  ComponentsPath.FriendItem;
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => {

            let nickname: string = friend.nickname.toString();
            let status: string = friend.onlineStatus.toString();

            switch(status){
                case '0':
                    status = "Online"
                    break;
                case '1':
                    status = "Absent"
                    break;
                case '2':
                    status = "Busy"
                    break;
                case '3':
                    status = "Offline"
                    break;
                case '4': 
                    status = "Banned"
                    break;
            }

            text = text.replace('${{nickname}}', nickname);
            text = text.replace('${{status}}', status);
            element.innerHTML += text

        })
        .finally(()=>{
            // When the component is load
            // Process here

        });
    };
    static LoadFriendList(element){

        // TODO mock friend list
        let userFriendList: User[] = new Array();  
        
        // Mocks
        let u1 = new User(); u1.nickname = "User 1"; u1.onlineStatus = OnlineStatus.Online;
        let u2 = new User(); u2.nickname = "User 2"; u2.onlineStatus = OnlineStatus.Absent;
        let u3 = new User(); u3.nickname = "User 3"; u3.onlineStatus = OnlineStatus.Busy;
        let u4 = new User(); u4.nickname = "User 4"; u4.onlineStatus = OnlineStatus.Offline;
        let u5 = new User(); u4.nickname = "User 5"; u4.onlineStatus = OnlineStatus.Banned;
        userFriendList.push(u1);
        userFriendList.push(u2);
        userFriendList.push(u3);
        userFriendList.push(u4);
        userFriendList.push(u5);


        userFriendList.forEach(friend => {                           
            this.LoadFriendItem(element, friend);
        });


        // Last friend added of the list
        let friendList = Array.prototype.slice.call(element.childNodes);
        friendList.forEach(friendElement => {  
            friendElement.addEventListener('click', ()=>{
                let socialRight = document.getElementsByTagName('social-right')[0];
                this.LoadFriendChat(socialRight,);    
            });
        });
        
    };
    static LoadFriendChat(element){
        const HTML_FILE_TO_LOAD =  ComponentsPath.FriendChat;
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => element.innerHTML = text)
        .finally(()=>{
            // When the component is load
            // Process here

        });
    };
    static LoadPatchNote(element, markdown){
        const HTML_FILE_TO_LOAD =  ComponentsPath.PatchNote;
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => element.innerHTML += text)
        .finally(()=>{
            // When the component is load
            // Process here

        });
    };
    static LoadNewsCell(element){
        const HTML_FILE_TO_LOAD =  ComponentsPath.NewsCell;
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => element.innerHTML += text)
        .finally(()=>{
            // When the component is load
            // Process here

        });
    };
    static LoadListNewsCell(element){
        for (let i = 0; i < 10; i++)
            this.LoadNewsCell(element)
    };
    static LoadDownloader(element){
        const HTML_FILE_TO_LOAD =  ComponentsPath.Downloader;
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => element.innerHTML += text)
        .finally(()=>{
            // When the component is load
            // Process here

        });
    };

};