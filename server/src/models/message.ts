import mongoose,{Document, Model} from "mongoose";
import {UserDoc} from "./user";
interface MessageAttrs {
    message:{
        text: string;
    },
    users: [
        from: string,
        to: string
    ],
    sender: UserDoc;
}

interface MessageDoc extends Document {
    message:{
        text: string;
    },
    users: [
        from: string,
        to: string
    ],
    sender: UserDoc;
}

interface MessageModel extends Model<MessageDoc> {
    build(attrs: MessageAttrs): MessageDoc;
}

const messageSchema = new mongoose.Schema({
    message: {
        text: {
            type: String,
            required: true
        }
    },
    users: Array,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    },
    timestamps: true
});

messageSchema.statics.build = (attrs: MessageAttrs) =>{
    return new Message(attrs);
}

const Message = mongoose.model<MessageDoc, MessageModel>("Message", messageSchema);

export {Message};