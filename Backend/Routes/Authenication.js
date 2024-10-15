import express from 'express'
import { Login } from '../Controllers/LoginController.js'
import { Register } from '../Controllers/RegisterController.js'
import { ForgetPassWord } from '../Controllers/ForgetPassController.js'

const app = express.Router()

app.post('/login', Login)
app.post('/register', Register)
app.put('/forget', ForgetPassWord)

export default app