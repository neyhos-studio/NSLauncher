import ID from "../ID/ID";
import Game from "../Game/Game";
import IPAdress from "../IPAdress/IPAdress";
import Token from "../Token/Token";
import { OnlineStatus } from "../../Core/Enumerators/OnlineStatus/OnlineStatus";

export default class User {

    //public id: ID;
    public id: ID;
    public ip: IPAdress;
    public token: Token;
    public nickname: String;

    public onlineStatus: OnlineStatus;
    public gameOwned: Game[];
    public friendList: User[];

    constructor(){}

}