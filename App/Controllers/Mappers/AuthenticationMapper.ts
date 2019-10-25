import User from "../../Entities/User/User";

export default class AuthenticationMapper{

    static getUser = (backendObject: XMLHttpRequest): User => {

        let user = new User();
        user.nickname = backendObject.response.pseudo;
        user.onlineStatus = backendObject.response.status;
        user.ip = backendObject.response.ip;
        user.token = backendObject.response.token;

        return user;
    }
}