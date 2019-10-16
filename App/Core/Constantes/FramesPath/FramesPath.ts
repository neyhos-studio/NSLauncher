export default class FramesPath {    

    constructor(){};

    // Please keep this store order by name

    // Path To Pages
    static readonly Updater: string = process.cwd() + '/App/Web/Views/Updater/launcher-updater.html';
    static readonly Authentication: string = process.cwd() + '/App/Web/Views/Authentication/launcher-authentication.html';
    static readonly VerificationCode: string = process.cwd() + '/App/Web/Views/Authentication/launcher-verification-code.html';
    static readonly MainFrame: string = process.cwd() + '/App/Web/Views/MainFrame/launcher-main-frame.html';

}