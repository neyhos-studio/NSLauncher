import ComponentsPath from "../../Core/Constantes/ComponentsPath/ComponentsPath";


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
    static LoadFriendItem(element){
        const HTML_FILE_TO_LOAD =  ComponentsPath.FriendItem;
        let friend = document.createElement('button');
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => friend.innerHTML += text)
        .finally(()=>{
            // When the component is load
            // Process here

            friend.className = "fx fx-row w100p h-light p10";
            friend.addEventListener('click', ()=>{

                // Friend event click
                let nickname = "*TEST";

                //TODO
                //LoadFriendChat(element, nickname)

            });
            element.appendChild(friend);
        });
    };
    static LoadFriendList(element){
        for (let i = 0; i < 10; i++){                     
            this.LoadFriendItem(element);
        };
    };
    static LoadFriendChat(element, nickname){
        const HTML_FILE_TO_LOAD =  ComponentsPath.FriendChat;
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => element.innerHTML += text)
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