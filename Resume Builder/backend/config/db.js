import mongoose from "mongoose";

export const connectDB = async() =>{

    try {
        await mongoose.connect("mongodb+srv://zulfiqarkhokhar222_db_user:PfEFVkxcs3pWVlyR@cluster0.g258gkt.mongodb.net/");
        console.log("DB Conntected");
    } catch (error) {
        console.log("DB Error: ",error)
    }
}