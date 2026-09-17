import express from 'express'
import cors from 'cors'

const app = express();
const port  = 8000;

app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}))

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



app.listen(port,()=>{
    console.log("Server started...")
})