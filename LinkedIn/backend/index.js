import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
dotenv.config();

let port = process.env.PORT || 9001;

let app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRouter)

app.get("/",(req,res)=>{
    res.send("LinkedIn Project");
})

app.listen(port,()=>{
    connectDb();
    console.log("Server Started...")
})

