import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import router from './routes/user.route.js';
dotenv.config()

let app = express();

app.use(express.json());
app.use("/api",router)

let port = process.env.PORT;


app.get("/",(req,res)=>{
    res.send("Authentication")
})


app.listen(port,()=>{
    connectDb();
    console.log(`server started at ${port}`)
})