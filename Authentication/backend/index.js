import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import router from './routes/user.route.js';
import cookieParser from 'cookie-parser';
dotenv.config()

let app = express();

app.use(express.json());
app.use(cookieParser())
app.use("/api",router)

let port = process.env.PORT;



app.listen(port,()=>{
    connectDb();
    console.log(`server started at ${port}`)
})