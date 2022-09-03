import express, {Request, Response} from "express";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import {currentUser} from "../../middlewares/currentuser";
import {requireAuth} from "../../middlewares/requireauth";
import { User } from "../../models/user";

const router = express.Router();

router.put("/api/profile-update", currentUser, requireAuth, async (req: Request, res: Response) => {
    console.log("I am cuurent user", req.currentUser);
    const {imageUrl} = req.body;
    const authUser = await User.findOne({email: req.currentUser!.email});
    let isSetImage = false;
    if(!authUser)
    {
        throw new NotAuthorizedError("User not authenticated");
    }
    if(imageUrl !== undefined && imageUrl !== null && imageUrl !== "")
    {
        isSetImage = true;
    }
    authUser.set({
        profileImage: imageUrl,
        isProfileImageSet: isSetImage
    });
    await authUser.save();
    res.status(200).send(authUser);
})

export {router as updateProfileRouter};