import User from "../User/User";
import IpcEventsRepo from "../../Repositories/IpcEventsRepo/IpcEventsRepo";

export default class SessionUser{ 


    private static user: User;
    
    private constructor(){}

    public static Create(){
        return new SessionUser();
    }


    public static getUser(): User {
        return this.user;
    }
    public static setUser(user:User) {
        this.user = user;
    }

}