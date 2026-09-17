import express from 'express'
import cors from 'cors'

const app = express();
const port  = 8000;

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send({
        name:"Zulfiqar Ali",
        age:28
    })
})

app.listen(port,()=>{
    console.log("Server started...")
})