/* eslint-disable no-unused-vars */
import User from "../Models/User.js"
import bcrypt from "bcrypt" 

export const Register = async (req,res)=>{
    const {Name, Email, PhoneNumber, Password} = req.body;
    try{
        if(!Name || !Email || !PhoneNumber || !Password){
            return res.json({status: false, message: "All fields must be filled"})
        }
        const userExist = await User.findOne({Email})
        if(userExist){
            return res.json({status: false, message: "There exist a user with this email ID"})
        }
        const hashedPassword = await bcrypt.hash(Password, 10)
        const newUser = await User.create({
            Name,
            Email,
            PhoneNumber,
            Password: hashedPassword
        })
        res.json({status: true, message: "User Registered Successfully"})

    } catch(err){
        return res.json({status: false, message: "An errored occurred during Registration"})
    }
}