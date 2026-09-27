import jwt from "jsonwebtoken"

const JWT_SECRET = "JKAHJBHJHANAONAJ";
const EXPIRE_IN = "24h";

export const generateToken = (userId) =>{
    const token = jwt.sign({id:userId},JWT_SECRET,{expiresIn:EXPIRE_IN});
    return token;
}