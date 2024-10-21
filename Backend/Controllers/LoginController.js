/* eslint-disable no-undef */
import User from "../Models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

/* eslint-disable no-unused-vars */
export const Login = async (req,res)=>{
    const {Email, Password} = req.body
    try{
        if(!Email || !Password){
            return res.json({status: false, message: "Both the fields are required"})
        }
        const userExist = await User.findOne({Email})
        if(!userExist){
            return res.json({status: false, message: "No User Found"})
        }
        const isPasswordMatch = await bcrypt.compare(Password, userExist.Password)
        if(!isPasswordMatch){
            return res.json({status: false, message: "Invalid Password or Email ID"})
        }

        const Token = jwt.sign({id: userExist._id,Email: userExist.Email,Name: userExist.Name}, process.env.JWT_TOKEN, {expiresIn: '3d'})

        
        return res.cookie('userToken',Token, {
            httpOnly: true, 
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        }).json({status: true, message: "User Logged In", token: Token, userData: userExist})

    } catch(err){
        res.json({status: false, message: "An Error Occurred while login"})
    }
}

export const VerifyToken = (req,res)=>{
    const Token = req.headers.Authorization;

    if(!Token){
        return res.json({status: false, message: "Unable to recieve token"})
    }

    try{ 
        const decoded = jwt.verify(Token, process.env.JWT_TOKEN)
        return res.json({status: true, message: "User is Logged In", data: decoded})
    } catch(err){
        return res.json({status: false, message: "User is not Logged In"})
    }
    
}

