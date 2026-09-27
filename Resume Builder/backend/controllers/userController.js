import { generateToken } from "../config/jwtTokenGenerator";
import userModel from "../models/userModel";
import validator from "validator"

// signup user

export async function registerUser(req,res){
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({
                success:false,
                message:"Invalid email"
            })
        }

        if(password.email < 8){
            return res.status(400).json({
                success:false,
                message:"Password must be 8 Character long"
            })
        }

        if(await userModel.findOne({email})){
            return res.status(400).json({
                success:false,
                message:"User already exist"
            })
        }

        const hashedPass = await bcrypt.hash(password,10);
        const user = await userModel.create({name,email,password:hashedPass});

        const jwtToken = generateToken(user._id);
        return res.status(200).json({
            success:true,
            jwtToken,
            user:{id:user._id,name:user.name,email:user.email}
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}

// login user

export async function loginUser(req,res){
    try {
        
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All field are required"
            })
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"Invalid email or password"
            })
        }

        const matched = await bcrypt.compare(password,user.password)
        if(!matched){
            return res.status(401).json({
                success:false,
                message:"Invalid email or password"
            })
        }

        const jwtToken = generateToken(user._id);
        return res.status(200).json({
            success:true,
            jwtToken,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}

// get userDetails

export async function getUserDetail(req,res){
    try {
        const user = await userModel.findById(req.user.id).select("name email");
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }
        res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}