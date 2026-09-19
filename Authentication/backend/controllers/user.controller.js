import User from "../models/user.model.js";

export const singup = async (req,res) =>{
    try {
        let user = req.body;
        await User.create(user);
        res.status(200).json({message:"User created"})
    } catch (error) {
        res.status(400).json({message:error})
    }
}

export const login = async (req,res) =>{
    try {
        
        let users = await User.find();
        res.status(200).json(users)

    } catch (error) {
        res.status(400).json({message:error})
    }
}