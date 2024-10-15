/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import User from "../Models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

/* eslint-disable no-unused-vars */
export const Login = async (req,res)=>{
    const {Email, Password} = req.body
    try{
        if(!Email || !Password){
            res.json({status: false, message: "Both the fields are required"})
        }
        const userExist = await User.findOne({Email})
        if(!userExist){
            res.json({status: false, message: "No User Found"})
        }
        const isPasswordMatch = await bcrypt.compare(Password, userExist.Password)
        if(!isPasswordMatch){
            res.json({status: false, message: "Invalid Password or Email ID"})
        }

        const Token = jwt.sign({id: userExist._id,Email: userExist.Email }, process.env.JWT_TOKEN, {expiresIn: '3d'})

        
        res.cookie('userToken',Token, {httpOnly: true}).json({status: true, message: "User Logged In", token: Token})

    } catch(err){
        res.json({status: false, message: "An Error Occurred while login"})
    }
}