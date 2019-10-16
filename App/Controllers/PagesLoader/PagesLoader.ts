import PagesPath from "../../Core/Constantes/PagesPath/PagesPath";
import ComponentsLoader from "../ComponentsLoader/ComponentsLoader";


export default class PagesLoader {

    constructor(){}

    // pages
    static PageLoad_NSMMO(){    
        const HTML_FILE_TO_LOAD =  PagesPath.NS_Mmo;
        const PAGE_HOLDER = document.getElementsByTagName('page')[0];

        // Load the "html_page" in "html_element"
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => PAGE_HOLDER.innerHTML = text)
        .finally(()=>{
            // When the component is load
            // Process here

            // Load the Patch Notes (left)
            ComponentsLoader.LoadPatchNote(document.getElementsByTagName('patch-note')[0],'filename')

            // Load the News Cell (right)
            ComponentsLoader.LoadListNewsCell(document.getElementsByTagName('news-tab')[0])

            // Loader the downloader
            ComponentsLoader.LoadDownloader(document.getElementsByTagName('downloader')[0])

        });
    }
    static PageLoad_Profil(){    
        const HTML_FILE_TO_LOAD =  PagesPath.Profil;
        const PAGE_HOLDER = document.getElementsByTagName('page')[0];

        // Load the "html_page" in "html_element"
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => PAGE_HOLDER.innerHTML = text)
        .finally(()=>{
            // When the component is load
            // Process here
            
        });
    }
    static PageLoad_Home(){    
        const HTML_FILE_TO_LOAD =  PagesPath.Home
        const PAGE_HOLDER = document.getElementsByTagName('page')[0];

        // Load the "html_page" in "html_element"
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => PAGE_HOLDER.innerHTML = text)
        .finally(()=>{
            // When the component is load
            // Process here
            
        });
    }
    static PageLoad_Social(){    
        const HTML_FILE_TO_LOAD =  PagesPath.Social;
        const PAGE_HOLDER = document.getElementsByTagName('page')[0];

        // Load the "html_page" in "html_element"
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => PAGE_HOLDER.innerHTML = text)    
        .finally(()=>{
            // When the component is load
            // Process here

            // Create a "Friend List" after the page is loaded 
            let friends = document.getElementsByTagName('friends')[0];
            if ( friends !== null)
                ComponentsLoader.LoadFriendList(friends);
        });    
    }
    static PageLoad_Store(){    
        const HTML_FILE_TO_LOAD =  PagesPath.Store;
        const PAGE_HOLDER = document.getElementsByTagName('page')[0];

        // Load the "html_page" in "html_element"
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => PAGE_HOLDER.innerHTML = text)
        .finally(()=>{
            // When the component is load
            // Process here
            
        });
    }
    static PageLoad_LauncherPatch(){    
        const HTML_FILE_TO_LOAD =  PagesPath.LauncherPatch;
        const PAGE_HOLDER = document.getElementsByTagName('page')[0];

        // Load the "html_page" in "html_element"
        fetch(HTML_FILE_TO_LOAD)
        .then( response => response.text() )
        .then( text => PAGE_HOLDER.innerHTML = text)
        .finally(()=>{
            // When the component is load
            // Process here

            // Load the Patch Notes
            ComponentsLoader.LoadPatchNote(document.getElementsByTagName('patch-note')[0],'filename')

            
        });
    }

}