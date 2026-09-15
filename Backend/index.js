// creating server in node js
import http from 'http'

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to Home")
    }
    else if(req.url === "/about"){
        res.end("Welcome to about page")
    }
    else{
        res.end("404 Page not Found")
    }
})

server.listen(8000,()=>{
    console.log("server is started")
});

