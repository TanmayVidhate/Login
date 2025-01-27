import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

import { PostLogin } from './controller/users.js';
import { getHealth } from './controller/Health.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/Login",PostLogin);

app.get("/health",getHealth);

const ConnectDB = async () =>{
    const con = await mongoose.connect(process.env.MONGO_URL)

    if(con){
        console.log('Connected to MongoDB')
    }
}


const PORT = process.env.PORT || 5002 
app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
    ConnectDB();
})