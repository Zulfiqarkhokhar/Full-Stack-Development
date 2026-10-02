import express from "express";
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
dotenv.config();

let port = process.env.PORT || 9001;

let app = express();
app.use("/api/auth",authRouter)

app.get("/",(req,res)=>{
    res.send("LinkedIn Project");
})

app.listen(port,()=>{
    connectDb();
    console.log("Server Started...")
})

