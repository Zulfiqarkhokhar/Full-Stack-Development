import express from "express";
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import productRoute from "./routes/product.route.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
dotenv.config();

let port = process.env.PORT || 9001;

let app = express();
app.use(express.json());
app.use("/api",productRoute);
app.use(errorMiddleware)

app.get("/",(req,res)=>{
    res.json({message:"Development Started..."})
})

app.listen(port,()=>{
    connectDb();
    console.log("Server Started...")
})