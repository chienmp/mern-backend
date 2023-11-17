import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

const registerRoute = express.Router();

registerRoute.post('/', async (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then((hashedPassword) => {
        const user = new User({
            email: req.body.email,
            password: hashedPassword,
        });
        user.save().then((result) => {
            res.status(200).send({"message": 'user created sucessfully', result});
        }).catch((e) => {
            res.status(500).send('create user failed');
            console.log(e);
        });
    })
    .catch((error) => {
        res.status(500).send('error hash password');
        console.log(error);
    });
});

export default registerRoute;