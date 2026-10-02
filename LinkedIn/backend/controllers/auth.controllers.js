import generateToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const sigup = async (req,res) =>{
    try {
        let {firstName, lastName, userName, email, password} = req.body;
        let existEmail = await User.findOne({email});
        if(existEmail){
            return res.status(400).json({message: "Email already exist"})
        }
        let existUsername = await User.findOne({userName});
        if(existUsername){
            return res.status(400).json({message: "UserName already exist"})
        }
        if(password.length < 8){
            return res.status(400).json({message:"Password must be at least 8 characters"})
        }

        let hashPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password: hashPassword
        });

        const token = await generateToken(user._id);

        res.cookie("token",token,{
            httpOnly:true,
            maxAge:24*60*60*1000,
            sameSite:"strict",
            secure:process.env.NODE_ENVIRONMENT === "production"
        })

        return res.status(201).json(user)

    } catch (error) {
        return res.status(501).json({message:error})
    }
}

export const login = async (req,res) =>{
    try {
        let {email, password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "User does not exist"})
        }

        let isMatched = await bcrypt.compare(password,user.password);

        if(!isMatched){
            res.status(400).json({message:"Invalid credentials"})
        }

        const token = await generateToken(user._id);

        res.cookie("token",token,{
            httpOnly:true,
            maxAge:24*60*60*1000,
            sameSite:"strict",
            secure:process.env.NODE_ENVIRONMENT === "production"
        })

        return res.status(201).json(user);

    } catch (error) {
        return res.status(501).json({message:error})
    }
}