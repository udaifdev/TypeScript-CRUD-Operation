
import mongoose, { Document, Schema } from "mongoose";


export interface Iuser extends Document {
    name: String;
    email: String;
    password: String;
}

const userSchema: Schema = new Schema<Iuser>({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

// createing user mode using the schema and the Iuser interface
export default mongoose.model<Iuser>('User', userSchema);