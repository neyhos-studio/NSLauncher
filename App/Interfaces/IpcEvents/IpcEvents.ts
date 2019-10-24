import SessionUser from "../../Entities/SessionUser/SessionUser";

export default interface IpcEvents {    

    LauncherUpdater(): void;
    Authentication(): void;
    VerificationCode(): void;
    MainFrame(): void;

    GetSession(): SessionUser;
    SetSession(session: SessionUser): void;
    
}