import express from 'express'
import users from './users.js'

const app = express();
const port = 8000;

// creating middleware for json data

app.use(express.json())


// getting all users

app.get('/users',(req,res)=>{
    res.json(users);
})

// using params to find user

app.get("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const Newuser = users.find((user)=>(user.id === id));
    if(!Newuser){
        res.send("404 user not found")
    }
    res.json(Newuser);
})

// getting querry params from url

app.get("/search",(req,res)=>{
    const querry = req.query;
    res.json(querry);
})

app.get('/',(req,res)=>{
    // sending json

    res.json({
        name:"zulfiqar",
        age:28,
        university:"IBA"
    })
})

app.get('/about',(req,res)=>{
    res.send("This is about page");
})

app.get('/contact',(req,res)=>{
    res.send("This contact page");
})



// creating post api

app.post('/',(req,res)=>{
    // we can access body data in req.body
    const body = req.body;
    res.send(body.name);
})

//route for page not found


app.all('*splat',(req,res)=>{
    res.status(404).send('<h1>404! Page not found</h1>');
})

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})






















// creating server in node js
// import http from 'http'

// const server = http.createServer((req,res)=>{
//     if(req.url === "/"){
//         res.end("Welcome to Home")
//     }
//     else if(req.url === "/about"){
//         res.end("Welcome to about page")
//     }
//     else{
//         res.end("404 Page not Found")
//     }
// })

// server.listen(8000,()=>{
//     console.log("server is started")
// });

