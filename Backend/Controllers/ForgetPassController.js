import User from "../Models/User.js"
import bcrypt from 'bcrypt'

/* eslint-disable no-unused-vars */
export const ForgetPassWord = async (req,res)=>{
    const {Email, NewPassword} = req.body
    try{
        if(!NewPassword || !Email){
            res.json({status: false, message: "New Password not found"})
        }
        const userExist = await User.findOne({Email})
        if(!userExist){
            res.json({status: false, message: "No user found"})
        }
        const hashedPassword = await bcrypt.hash(NewPassword, 10)
        userExist.Password = hashedPassword

        await userExist.save()
        res.json({status: true, message: "Password Changed successfully"})
    } catch(err){
        res.json({status: false, message: "Error Changing the password"})
    }
}