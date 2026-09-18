import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

let app = express();
let port = process.env.PORT;


app.get("/",(req,res)=>{
    res.send("Authentication")
})


app.listen(port,()=>{
    console.log(`server started at ${port}`)
})