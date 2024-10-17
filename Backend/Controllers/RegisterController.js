/* eslint-disable no-unused-vars */

import User from "../Models/User.js"
import bcrypt from "bcrypt" 


export const Register = async (req,res)=>{
    try{
        const {Name, Email, PhoneNumber, Password} = req.body;
        if(!Name || !Email || !PhoneNumber || !Password){
            return res.json({status: false, message: "All the fields must be filled"})
        }

        const userExist = await User.findOne({Email})
        if(userExist){
            return res.json({status: false, message: "User Already exist with this Email ID"})
        }

        const hashedPassword = await bcrypt.hash(Password,10)
        const newUser = await User.create({
            Name,
            Email,
            PhoneNumber,
            Password: hashedPassword
        }) 
        res.json({status: true, message: "Registered Successfully"})

    } catch(err){
        res.json({status: false, message: "An error occurred during registration! Please try again"})
    }
    
    
}    

