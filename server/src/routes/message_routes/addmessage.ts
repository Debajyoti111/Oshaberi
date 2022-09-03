import express, {Request, Response } from "express";
import {Message} from "../../models/message";
import { currentUser } from "../../middlewares/currentuser";
import { requireAuth } from "../../middlewares/requireauth";
import { User } from "../../models/user";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import mongoose from "mongoose";
const router = express.Router();

router.post("/api/addmessage", currentUser, requireAuth, async (req:Request, res:Response) => {
    const {text, from, to} = req.body;
    const authUser = await User.findOne({_id: new mongoose.Types.ObjectId(from)});
    if(!authUser){
        throw new NotAuthorizedError("Not authorized");
    }
    const message = Message.build({
        message: {text},
        users: [from, to],
        sender: authUser
    });
    await message.save();
    res.status(201).send(message);
})

export {router as addMessageRouter};