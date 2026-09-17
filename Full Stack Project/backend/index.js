import express from 'express'
import cors from 'cors'

const app = express();
const port  = 8000;

let pass = "zulfi123";

app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
})) //  with orgin we can specify the only route or more than one route for our choice

// app.use(cors()) // this allow all host to access this

// custome middle ware to validate password and then send request to api

app.use((req,res,next)=>{
    if(req.body.pass != pass){
        res.send("Password invalid");
    }
    next();// this next method send the request to server
})

let users = [{
        name:"Zulfiqar Ali",
        age:28
    }]

app.get("/",(req,res)=>{
    res.send(users)
})

app.post("/addUser",(req,res)=>{
    const user = req.body;
    users.push(user);
})

app.post("/pass",(req,res)=>{
    console.log(req.body.pass);
    res.send({success:true})
})



app.listen(port,()=>{
    console.log("Server started...")
})