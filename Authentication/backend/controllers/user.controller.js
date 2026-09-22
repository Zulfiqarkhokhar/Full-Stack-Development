import generateToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import cloudinary from "../config/cloudinary.js";

export const singup = async (req, res) => {

    try {

        const {
            firstName,
            lastName,
            userName,
            email,
            password
        } = req.body;

        if (
            !firstName ||
            !lastName ||
            !userName ||
            !email ||
            !password
        ) {
            return res.status(400).json({
                message: "Please enter all details"
            });
        }

        const existUser = await User.findOne({
            $or: [
                { email },
                { userName }
            ]
        });

        if (existUser) {

            if (existUser.email === email) {
                return res.status(400).json({
                    message: "Email already exists"
                });
            }

            if (existUser.userName === userName) {
                return res.status(400).json({
                    message: "Username already exists"
                });
            }
        }

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );

        let profileImageUrl = "";

        if (req.file) {

            const uploadResult = await new Promise(
                (resolve, reject) => {

                    const stream =
                        cloudinary.uploader.upload_stream(
                            {
                                folder: "auth-app/profiles"
                            },
                            (error, result) => {

                                if (error) {
                                    reject(error);
                                } else {
                                    resolve(result);
                                }

                            }
                        );

                    stream.end(req.file.buffer);
                }
            );

            profileImageUrl = uploadResult.secure_url;
        }

        const newUser = await User.create({

            firstName,
            lastName,
            userName,
            email,
            password: hashedPassword,
            profileImage: profileImageUrl

        });

        const jwtToken = generateToken(newUser._id);

        res.cookie(
            "token",
            jwtToken,
            {
                httpOnly: true,
                secure:
                    process.env.NODE_ENVIRONMENT === "production",
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            }
        );

        return res.status(201).json({

            message: "Account created successfully",

            user: {
                id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                userName: newUser.userName,
                email: newUser.email,
                profileImage: newUser.profileImage
            }

        });

    } catch (error) {

        console.log("Signup Error:", error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};


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
            profileImage: existUser.profileImage
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

export const getCurrentUser = async (req, res) => {

    try {

        const user = await User.findById(req.userId)
            .select("-password");

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        return res.status(200).json({
            user
        });

    } catch (error) {

        console.log("Get Current User Error:", error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};