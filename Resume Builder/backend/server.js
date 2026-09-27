import express from 'express'
import cors from 'cors'
import "dotenv/config"
import { connectDB } from './config/db.js';

let port = 9000;
let app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))

connectDB();

app.get("/",(req,res)=>{
    res.status(200).json({
        name:"Zulfiqar Ali",
        profession:"Developer"
    })
})


app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})