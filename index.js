import express, { request, response } from "express";
import { PORT, DBCONNECTION, MONGODB } from "./config.js";
import  { mongoose } from 'mongoose';
import bookRoute from "./route/bookRoute.js";
import cors from 'cors';
import registerRoute from "./route/registerRoute.js";
import loginRoute from "./route/loginRoute.js";
import auth from './auth.js';


const app = express();

app.use(express.json());
app.get('/', auth, (request, response) => {
    return response.status(200).send('<b> hello world </b>');
});
//default cors
app.use(cors());
//router
app.use('/books', auth, bookRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);



// custom cors
/* app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
})); */



mongoose.connect(MONGODB).then(() => {
    app.listen(PORT, () => {
        console.log('app connected dbmongo local : ' + PORT);
    });
})
.catch((error) => {
    console.log(error);
})