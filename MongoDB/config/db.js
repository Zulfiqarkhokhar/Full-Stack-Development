// function to connect db
import mongoose from "mongoose";

const connectToDb = async () =>{
    try {
       await mongoose.connect(process.env.MONGODB_URI);
       console.log("DB Connected")

    } catch (error) {
        console.log("DB error: ",error)
    }
}

export default connectToDb;