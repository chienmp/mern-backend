import mongoose, { model } from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title : {type: String},
        author: {type: String},
        date: {type: Date, default: Date.now}
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema)