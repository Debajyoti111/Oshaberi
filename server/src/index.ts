import app from "./app";
import mongoose from "mongoose";
import { Socket } from "socket.io";
const socket = require("socket.io")
const start = () =>{
    if(!process.env.SECRET)
        console.log("SECRET is not set");
    if(!process.env.PORT)
        console.log("PORT is not set");
    if(!process.env.MONGO_URL)
        console.log("MONGO_URL is not set");
    
    try
    {
        mongoose.connect(process.env.MONGO_URL!, {});
        console.log("Connected to MongoDB");
    }
    catch(err)
    {
        console.log("Error connecting to MongoDB: \n", err);
    }
    const server = app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
    const io = socket(server, {
        cors:{
            origin: "http://localhost:3000",
            credentials: true
        }
    })
    
    let onlineUsers = new Map();
    io.on("connection", (socket: Socket) =>{
        let chatSocket = socket;

        socket.on("add-user", (userId: string)=>{
            onlineUsers.set(userId, socket.id);
        })

        socket.on("send-msg", (data: {to: string, message: string})=>{
            const sendUserSocket = onlineUsers.get(data.to);
            if(sendUserSocket)
            {
                io.to(sendUserSocket).emit("recieve-msg", data.message);
            }
        })
    })
}

start();