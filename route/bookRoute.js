import express from "express";
import { Book } from "../models/bookModel.js";

const route = express.Router();

route.post('/', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.date) {
            return response.status(500).send('invaild request');
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            date: request.body.date,
        };
        const book = await Book.create(newBook);
        return response.status(200).send(book);
    } catch (error) {
        console.log(error);
    }
});
route.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.date) {
            return response.status(500).send('invaild request');
        }
        const { id } = request.params;
        const book = await Book.findByIdAndUpdate(id, request.body);
        return response.status(200).send(book);
    } catch (error) {
        console.log(error);
    }
});

route.get('/', async (request, response) => {
    try {
        const book = await Book.find();
        return response.status(200).send(book);
    } catch (error) {
        console.log(error);
    }
});

route.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).send(book);
    } catch (error) {
        console.log(error);
    }
});

route.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findByIdAndRemove(id);
        if (!book) {
            return response.status(200).send('book not found');
        }
        return response.status(200).send('delete successfully');
    } catch (error) {
        console.log(error);
    }
});

export default route;