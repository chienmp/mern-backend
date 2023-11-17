import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email : {
            type: String,
            required: [true, 'please provide an email'],
            unique: [true, 'email exists'],
        },
        password: {
            type: String,
            required: [true, "Please provide a password!"],
            unique: false,
          },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User', userSchema)