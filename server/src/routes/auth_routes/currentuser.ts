import express, {Response, Request} from 'express';
import { currentUser } from '../../middlewares/currentuser';
import { User } from '../../models/user';
import { NotFoundError } from '../../errors/not-found-error';
const router = express.Router();

router.get("/api/currentuser", currentUser, async (req: Request, res: Response) => {
    const authUser = await User.findOne({email: req.currentUser!.email});
    if(!authUser)
        throw new NotFoundError("User not found");
    res.status(200).json(authUser);
})

router.post("/api/currentuser", currentUser, async(req: Request, res: Response) => {
    const authUser = await User.findOne({email: req.currentUser!.email});
    if(!authUser)
        throw new NotFoundError("User not found");
    res.status(200).json(authUser);
})
export {router as currentUserRouter};