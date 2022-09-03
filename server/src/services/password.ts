import bcrypt from "bcrypt";

class Password {
    public static async hash(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }
    public static async compare(storedPassword:string, suppliedPassword:string): Promise<boolean> {
        return bcrypt.compare(suppliedPassword, storedPassword);
    }
}

export default Password;