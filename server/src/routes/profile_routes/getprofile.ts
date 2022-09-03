import express, {Request, Response} from "express";
import {currentUser} from "../../middlewares/currentuser";
import { requireAuth } from "../../middlewares/requireauth";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import { User } from "../../models/user";
const router = express.Router();

router.get("/api/get-profile", requireAuth, async (req: Request, res: Response) => {
    const authUser = await User.findOne({email: req.currentUser!.email});
    if(!authUser)
    {
        throw new NotAuthorizedError("User not authenticated");
    }
    res.status(200).send(authUser);
})

export {router as getProfileRouter};