export default class PagesPath {    

    constructor(){};

    // Please keep this store order by name

    // Path To Pages
    static readonly Home:string = process.cwd() + '/App/Web/Views/MainFrame/Pages/home.html';
    static readonly LauncherPatch:string = process.cwd() + '/App/Web/Views/MainFrame/Pages/launcherPatch.html';
    static readonly NS_Mmo:string = process.cwd() + '/App/Web/Views/MainFrame/Pages/ns-mmo.html';
    static readonly Profil:string = process.cwd() + '/App/Web/Views/MainFrame/Pages/profil.html';
    static readonly Social:string = process.cwd() + '/App/Web/Views/MainFrame/Pages/social.html';
    static readonly Store:string = process.cwd() + '/App/Web/Views/MainFrame/Pages/store.html';

}