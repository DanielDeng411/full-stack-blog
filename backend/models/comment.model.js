import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const commentScheme = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        desc: {
            type: String,
            
        },
    },
    {timestamps: true}
);


export default mongoose.model("Comment", commentScheme);