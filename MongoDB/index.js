import express from 'express'
import mongoose from 'mongoose'
import User from './models/user.model.js';

const app = express();
const port = 8000;

const mongooseUri = "mongodb+srv://zulfiqarkhokhar222:zulfiqar123@cluster0.p1jqkja.mongodb.net/my_db";


// middleware

app.use(express.json());

// function to connect db

const connectToDb = async () =>{
    try {
       await mongoose.connect(mongooseUri);
       console.log("DB Connected")

    } catch (error) {
        console.log("DB error: ",error)
    }
}

// apis

app.get("/",(req,res)=>{
    res.send("Mongodb")
})

//creating user in db
app.post("/create", async(req,res)=>{
    try {
        const {name,age,email,username} = req.body;
        const newUser = await User.create({
            name,
            age,
            email,
            username
        })
        res.status(201).json({message:"User created"});
    } catch (error) {
        res.status(400).json({message:error})
    }
})

// port listning

app.listen(port,()=>{
    connectToDb();
    console.log(`Server started at port ${port}`);
})