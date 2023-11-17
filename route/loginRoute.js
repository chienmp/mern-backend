import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginRoute = express.Router();

loginRoute.post('/', async (req, res) => {
    bcrypt.hash(req.body.password, 10)
    User.findOne({email: req.body.email})
    .then((user) => {
        bcrypt.compare(req.body.password, user.password)
        .then((passwordChecked) => {
            if (!passwordChecked) {
                return res.status(401).send('password does not match');
            }
            const token = jwt.sign({
                userId: user._id,
                userEmail: user.email,
            }, 'RANDOM-TOKEN', {expiresIn: '24h'});
            const result = {
                message: 'login success',
                email: user.email,
                token
            }
            res.status(200).send(result);
        })
        .catch((error) => {
            res.status(401).send('password does not match');
            console.log(error);
        })
    })
    .catch((error) => {
        res.status(500).send('email not exists');
        console.log(error);
    });
});

export default loginRoute;