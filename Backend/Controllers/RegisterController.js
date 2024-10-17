/* eslint-disable no-unused-vars */
import User from "../Models/User.js"
import bcrypt from "bcrypt" 

let otpMap = new Map()

export const Register = async (req,res)=>{
    const {Name, Email, PhoneNumber, Password} = req.body;
    if(!Name || !Email || !PhoneNumber || !Password){
        return res.json({status: false, message: "All the fields must be filled"})
    }

    const userExist = await User.findOne({Email})
    if(userExist){
        return res.json({status: false, message: "User Already exist with this Email ID"})
    }

    const OTP = Math.floor((Math.random() * 9000)) + 1000

    otpMap.set(Email, {OTP, Name, PhoneNumber, Password})

    // API For sending the otp to Mail ID

    return res.json({status: true, message: "An OTP is sent to the Email ID"})
}

export const VerifyOTP = async (req,res)=>{
    const {Email, otp} = req.body
    const {OTP, Name, PhoneNumber, Password} = otpMap.get(Email)

    if(OTP == otp){
        otpMap.delete(Email)

        const hashedPassword = await bcrypt.hash(Password, 10)
        const user = await User({Name, Email, PhoneNumber, hashedPassword})
        await user.save()
        
        res.json({status: true, message:"Registration Complete Successfully"})
    } else{
        res.json({status: false, message: "INVALID OTP Found"})
    }
}