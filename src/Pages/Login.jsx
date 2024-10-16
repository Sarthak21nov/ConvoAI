import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login() {

    const [input, setInput] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    function checkValid(){
      if(!input || !password){
        alert("All fields are mandatory")
        return false
      }
      return true
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(checkValid()){
          try{
            const Email = input
            const Password = password
            const response = await axios.post('http://localhost:5000/api/auth/login',{
              Email,
              Password
            })
            const {status, message, token} = response.data
            console.log(`Status = ${status}`)
            console.log(`Message = ${message}`)
            console.log(`Token = ${token}`)
            if(status){
              alert("Logged In Successfully")
              localStorage.setItem('authToken', token)
              navigate('/')
            } else{
              alert(message)
            }
          } catch(err){
            console.log(err)
            alert("An Error Occurred")
          }
        }
    }

  return (
    <div>
      <div className="bg-gradient-to-r from-slate-500 to-slate-50 min-h-[710px] flex justify-center items-center flex-col ">
        <div className="bg-slate-100 min-h-[400px] min-w-[400px] rounded-3xl shadow-2xl">
            <h2 className="font-semibold text-3xl p-4 ml-3">Sign In</h2>
            <p className="font-serif pl-4 ml-3">Sign in for seamlessly using ConvoAI</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" value = {input} onChange={(e)=>setInput(e.target.value)} placeholder="Email" className="p-4 mt-5 ml-5 shadow-2xl w-[350px]" required/>
                <input type="password" value = {password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="p-4 mt-5 ml-5 shadow-2xl w-[350px]" required/>
                <a href="/forget"><p className="text-blue-700 ml-2 p-3">Forget Password?</p></a>
                <div className="m-auto bg-slate-800 text-white pt-2 pb-2 pl-8 pr-8 rounded-2xl mt-5 hover:cursor-pointer shadow-2xl hover:transition hover:transform hover:duration-500 hover:scale-110" onClick={handleSubmit}>
                    <p>Login</p>
                </div>
            </form>
        </div>
        <div className="text-center mt-5">
            <p>New to ConvoAI! <a href="/SignUp" className="text-blue-600">Sign Up</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
