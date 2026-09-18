import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import connectToDb from './config/db.js';
import router from './routes/user.routes.js';

const app = express();
const port = process.env.PORT || 8001;

// middleware

app.use(express.json());
app.use("/api",router);

// port listning

app.listen(port,()=>{
    connectToDb()
    console.log(`Server started at port ${port}`);
})