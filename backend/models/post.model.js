import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const postScheme = new Schema(
    {
        user: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
        },
        img: {
            type: String,
        },
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            
        },
        context: {
            type: String,
            required: true,
        },
        isFeatured: {
            type: Boolean,
            default: false,
        },
        visits: {
            type: Number,
            default: 0,
        },
    },
    {timestamps: true}
);

export default mongoose.model("Post", postScheme);