import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface UserPayLoad {
    email: string;
    password: string;
    username: string;
}


export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    const {authUser} = req.body;
    if(req.session?.jwt) 
    {
        try{
            const payLoad = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayLoad;
            req.currentUser = payLoad;
        }
        catch(err){
            console.log("Couldn't verify user");
            req.currentUser = undefined;
            return next();
        }
        return next();
    }
    else if(authUser)
    {
        req.currentUser = authUser;
        return next();
    }
    else{
        req.currentUser = undefined;
        return next();
    }
}