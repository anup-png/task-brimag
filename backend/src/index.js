
import 'dotenv/config';
import express, { urlencoded } from 'express';
import cors from 'cors'


const app =express();

app.use(cors());
app.use(urlencoded());
app.use(express.json());

app.listen(3000,()=>{
    console.log("server is listenning at 3000");
})


import orderRoutes from '../src/routes/orderRoutes.js'
app.use("/api",orderRoutes);