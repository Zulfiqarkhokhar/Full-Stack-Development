import User from '../models/user.model.js'

export const home = (req,res)=>{
    res.send("Mongodb")
}

export const createUser = async(req,res)=>{
    try {
        // const {name,age,email,username} = req.body;
        // const newUser = await User.create({
        //     name,
        //     age,
        //     email,
        //     username
        // })
        const user = req.body;
        const newUser = await User.create(user)
        res.status(201).json({message:"User created"});
    } catch (error) {
        res.status(400).json({message:error})
    }
}

export const readAllUsers = async(req,res)=>{
    try {
       const users =  await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

export const findOneUser = async(req,res)=>{
    try {
        const user = await User.findOne({username:req.params.username});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const updateUser = async(req,res)=>{
    try {
        let id = req.params.id;
        let {name,username,email} = req.body;
        const updatedUser = await User.findByIdAndUpdate(id,{name,username,email},{new:true})
        res.status(200).json(updatedUser);
    } catch (error) {
         res.status(404).json({message:error})
    }
}

export const deleteUser =  async(req,res)=>{
    try {
        let id = req.params.id;
        let user = await User.findByIdAndDelete(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message:error})
    }
}