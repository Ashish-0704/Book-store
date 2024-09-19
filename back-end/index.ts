import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, databaseURL } from './config/connection';
import router from './routes/bookRoutes';

const app = express();

app.use(cors());
// app.use(cors({ origin: 'http://localhost:3000', methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type'] }));
app.use(express.json());
app.use(router);

mongoose.connect(databaseURL).then(() => {
    console.log('App is connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port number : ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});