import mongoose,{Document, Model} from "mongoose";
import Password from "../services/password";
interface UserAttrs {
    email: string;
    password: string;
    username: string;
    profileImage?: string;
    isProfileImageSet?: boolean;
}

export interface UserDoc extends Document {
    email: string;
    password: string;
    username: string;
    profileImage?: string;
    isProfileImageSet?: boolean;
}

interface UserModel extends Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: false,
        default: ""
    },
    isProfileImageSet: {
        type: Boolean,
        required: false,
        default: false
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
});

userSchema.pre("save", async function(done){
    if(this.isModified("password")){
        const hashedPassword = await Password.hash(this.get("password"));
        this.set("password", hashedPassword);
    }
})
userSchema.statics.build = (attrs: UserAttrs) =>{
    return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export {User};