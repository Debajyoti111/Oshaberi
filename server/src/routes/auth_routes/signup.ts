import express, {Request, Response} from "express";
import { body } from "express-validator";
import { User } from "../../models/user";
import { validateResult } from "../../middlewares/validation";
import { BadRequestError } from "../../errors/bad-request-error";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/api/signup", [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().isLength({min: 5, max: 20}).withMessage("Password must be between 5 and 20 characters"),
    body("username").isLength({min: 3, max: 20}).withMessage("Username must be between 3 and 20 characters")
], validateResult, async (req: Request, res: Response) => {
    const {email, password, username} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser)
    {
        throw new BadRequestError("User already exists");
    }
    const newUser = User.build({email, password, username});
    await newUser.save();
    const userJwt = jwt.sign({
        email: newUser.email,
        password: newUser.password,
        username: newUser.username
    }, process.env.JWT_KEY!);
    req.session = {
        jwt: userJwt
    };
    res.status(201).send(newUser);
});

export {router as signUpRouter};