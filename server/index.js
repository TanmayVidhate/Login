import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();


import { getHealth } from './controller/Health.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health",getHealth);




const PORT = process.env.PORT || 5002 
app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
})