import { Socket } from "socket.io";
import {UserPayLoad} from "../middlewares/currentuser";
/* eslint-disable no-var */
declare global{
    var onlineUsers: any;
    var chatSocket: Socket;
    namespace Express{
        interface Request{
            currentUser?: UserPayLoad;
        }
    }
}

export {};
