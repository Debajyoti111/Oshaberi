require("dotenv").config();
import express, { Request, Response } from "express";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import "express-async-errors";
import cors from "cors";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import { signInRouter } from "./routes/auth_routes/signin";
import { signUpRouter } from "./routes/auth_routes/signup";
import { currentUserRouter } from "./routes/auth_routes/currentuser";
import { getProfileRouter } from "./routes/profile_routes/getprofile";
import { updateProfileRouter } from "./routes/profile_routes/profileupdate";
import { getMessageRouter } from "./routes/message_routes/getallmessage";
import { addMessageRouter } from "./routes/message_routes/addmessage";
import { getAllUsersRouter } from "./routes/auth_routes/getallusers";
import { signoutRouter } from "./routes/auth_routes/signout";

const app = express();
app.use(json());
app.use(
    cookieSession({
        secret: process.env.SECRET!,
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
    })
);
app.use(cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(signInRouter);
app.use(signUpRouter);
app.use(signoutRouter);
app.use(currentUserRouter);
app.use(getProfileRouter);
app.use(updateProfileRouter);
app.use(getMessageRouter);
app.use(addMessageRouter);
app.use(getAllUsersRouter);
app.all("*", async (req:Request, res: Response) =>{
    throw new NotFoundError("Route Not Found"); 
})

app.use(errorHandler);

export default app;
