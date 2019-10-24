import IpcEvents from "../../Interfaces/ipcEvents/ipcEvents";
import SessionUser from "../../Entities/SessionUser/SessionUser";

export default class IpcEventsRepo implements IpcEvents {

    private ipc;

    constructor(){
        this.ipc = require('electron').ipcRenderer;
    }

    public LauncherUpdater():void {this.ipc.send('load-page-launcher-updater');};
    public Authentication():void {this.ipc.send('load-page-authentication');};
    public VerificationCode():void {this.ipc.send('load-page-verification-code');};
    public MainFrame():void {this.ipc.send('load-page-main-frame');};

    public GetSession():SessionUser {

        let session
        this.ipc.send('get-session');
        session = this.ipc.on('reply-get-session', (event, arg) => {
            console.log(arg)
            return arg[0];
        });
        console.log(session);
        return session;
    };
    public SetSession(session:SessionUser):void {this.ipc.send('set-session', session);};
    
}