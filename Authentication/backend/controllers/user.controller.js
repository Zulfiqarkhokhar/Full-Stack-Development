import generateToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const singup = async (req,res) =>{
    try {
        
        const {firstName,lastName,userName,email,password} = req.body;
        if(!firstName || !lastName || !userName || !email || !password){
            return res.status(400).json({message:"Please enter all details"})
        }

        const existUser = await User.findOne({email});
        
        if(existUser){
            return res.status(400).json({message:"User Already Exist"});
        }

        const hassedPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password:hassedPassword
        });

        const jwtToken = generateToken(newUser._id);

        res.cookie("token",jwtToken,{
            httpOnly:true,
            secure:process.env.NODE_ENVIRONMENT == "production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
        })

        return res.status(201).json({user:{
            firstName,
            lastName,
            userName,
            email,
        }})

    } catch (error) {

        return res.status(500).json({message:"Internal Sever Error"});
    }
}


export const login = async(req,res)=>{
    try {
        
        const {email,password} = req.body;

        const existUser = await User.findOne({email});
        if(!existUser){
            return res.status(400).json({message:"User does not Exist"});
        }

        let passwordMatch = await bcrypt.compare(password,existUser.password);

        if(!passwordMatch){
            return res.status(400).json({message:"Incorrect Password"});
        }

        const jwtToken = generateToken(existUser._id);

        res.cookie("token",jwtToken,{
            httpOnly:true,
            secure:process.env.NODE_ENVIRONMENT == "production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
        })

        return res.status(201).json({user:{
            firstName:existUser.firstName,
            lastName:existUser.lastName,
            userName:existUser.userName,
            email:existUser.email,
        }})


    } catch (error) {
        return res.status(500).json({message:"Internal Sever Error"});
    }
}


export const logout = async(req,res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json({message:"Logout Successfully"})
    } catch (error) {
        return res.status(500).json({message:"Internal Sever Error"});
    }
}