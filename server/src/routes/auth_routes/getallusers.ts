import express, {Request, Response} from "express";
import { User } from "../../models/user";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.get("/api/getallusers", async (req:Request, res: Response)=>{
    const users = await User.find({});
    if(!users)
        throw new NotFoundError("Users not found");
    res.status(200).send(users);
})

export {router as getAllUsersRouter};