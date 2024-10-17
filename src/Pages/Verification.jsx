/* eslint-disable react/prop-types */

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Verification(props) {

  const [otp, setOtp] = useState("") 
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const Email = localStorage.getItem('Email')
    const response = await axios.post('http://localhost:5000/api/auth/verify-otp', {
      Email,
      otp
    })
    if(response.data.status){
      localStorage.removeItem('Email')
      alert(response.data.message)
      navigate('/login')
    } else{
      alert("Unable to Verify")
    }
  }  

  return (
    <div>
      <div className="bg-gradient-to-r from-slate-500 to-slate-50 min-h-[710px] flex justify-center items-center flex-col ">
        <div className="bg-slate-100 min-h-[300px] min-w-[300px] rounded-3xl shadow-2xl m-5 pt-[80px]">
            <p className="text-center">An OTP has been sent to the E-mail ID: {props.email}</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" value = {otp} onChange={(e)=>setOtp(e.target.value)} placeholder="Enter OTP" className="p-4 mt-5 ml-5 shadow-2xl w-[250px]" required/>
                <div className="m-auto bg-slate-800 text-white pt-2 pb-2 pl-8 pr-8 rounded-2xl mt-5 hover:cursor-pointer shadow-2xl hover:transition hover:transform hover:duration-500 hover:scale-110" onClick={handleSubmit}>
                    <p>Verify</p>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Verification
