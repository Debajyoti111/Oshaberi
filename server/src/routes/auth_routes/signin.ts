import express, {Request, Response} from "express";
import jwt from "jsonwebtoken";
import {User} from "../../models/user";
import { NotFoundError } from "../../errors/not-found-error";
import { validateResult } from "../../middlewares/validation";
import {body} from "express-validator";
import Password from "../../services/password";
import { BadRequestError } from "../../errors/bad-request-error";

const router = express.Router();

router.post("/api/signin", [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().notEmpty().withMessage("Password must be supplied")
], validateResult, async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const existingUser = await User.findOne({email});
    if(!existingUser)
    {
        throw new NotFoundError("User not found");
    }
    const isPasswordValid = await Password.compare(existingUser.password, password);
    if(!isPasswordValid)
    {
        throw new BadRequestError("Invalid Password");
    }
    const userJwt = jwt.sign({
        email: existingUser.email,
        password: existingUser.password,
        username: existingUser.username
    }, process.env.JWT_KEY!);
    req.session = {
        jwt: userJwt
    };
    res.status(200).send(existingUser);
})

export {router as signInRouter};