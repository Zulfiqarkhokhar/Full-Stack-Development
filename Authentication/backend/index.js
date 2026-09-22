import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

let app = express();

import connectDb from './config/db.js';
import router from './routes/user.route.js';
import cors from "cors"
import cookieParser from 'cookie-parser';


app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use("/api",router)

let port = process.env.PORT;



app.listen(port,()=>{
    connectDb();
    console.log(`server started at ${port}`)
})