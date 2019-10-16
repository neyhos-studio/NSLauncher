import IpcEvents from "../../Interfaces/ipcEvents/ipcEvents";

export default class IpcEventsRepo implements IpcEvents {

    private ipc;

    constructor(){
        this.ipc = require('electron').ipcRenderer;
    }

    public LauncherUpdater() {this.ipc.send('load-page-launcher-updater');};
    public Authentication() {this.ipc.send('load-page-authentication');};
    public VerificationCode() {this.ipc.send('load-page-verification-code');};
    public MainFrame() {this.ipc.send('load-page-main-frame');};
    
}