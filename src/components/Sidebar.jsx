/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

function Sidebar() {
 
  const navigate = useNavigate()
  const Token = Cookies.get('Token')

  const handleLogout = ()=>{
    Cookies.remove('Token')
    localStorage.removeItem('userName')
    alert("Logged Out Successfully")
    navigate("/login")
  }

  return (
    <div>
      <div className="grid w-1/6 sm:grid-cols-1 bg-gray-900 h-full fixed overflow-hidden">
        <ul className="text-white m-5">
            <Link to='/'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black rounded-lg cursor-pointer hover:scale-110 transition transform duration-300">Home</li></Link>
            <Link to='/about'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black rounded-lg cursor-pointer hover:scale-110 transition transform duration-300">About</li></Link>
            <Link to='/BotSelection'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black cursor-pointer hover:scale-110 transition transform duration-300 rounded-lg">ChatBots</li></Link>
            <Link to='/commAndreview'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black cursor-pointer hover:scale-110 transition transform duration-300 rounded-lg">Reviews</li></Link>
            {Token ? (
            <li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black cursor-pointer hover:scale-110 transition transform duration-300 rounded-lg" onClick={handleLogout}>Log Out</li>
          ) : (
            <Link to='/login'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black cursor-pointer hover:scale-110 transition transform duration-300 rounded-lg">Login</li></Link>
          )}
             
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
