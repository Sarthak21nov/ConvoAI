/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import AuthRoutes from './Routes/Authenication.js'
import Review from './Routes/Comm.js'

const app = express()
dotenv.config()

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to mongoDB server");
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected from mongoDB Server");
})

const PORT = process.env.PORT || 5000

// Middlewares

app.use(cors())
app.use(express.json())
app.use(cookieParser())


//Routes
app.use('/api/auth', AuthRoutes)
app.use('/api/review', Review)

app.listen(PORT, ()=>{
    connect()
    console.log(`Server Started at ${PORT} port`)
})