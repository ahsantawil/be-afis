import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import userRoute from './routes/routeUser.js';
import productRoute from './routes/routeProduct.js';
import uiwRoute from './routes/routeUiw.js';
import areaRoute from './routes/routeArea.js';

dotenv.config();

const app = express();

app.use(cors({
    credentials : true,
    origin: 'http://localhost:5000'
}));

app.use(express.json());
app.use(userRoute);
app.use(productRoute);
app.use(uiwRoute);
app.use(areaRoute);


app.listen(process.env.APP_PORT, () => {
    console.log(`Server Running on port `, process.env.APP_PORT);
})