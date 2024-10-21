/* eslint-disable no-unused-vars */
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

function Sidebar() {

  const [isLoggedIn, setLogin] = useState("Log In")
  

  useEffect(()=>{
    async function checkLogIn(){
      const sendToken = Cookies.get('authToken') 
      const response = await axios.post('http://localhost:5000/api/auth/verifyToken',{}, {
        headers: {Authorization: `Bearer ${sendToken}`}
      })
      const {status} = response.data.status
      if(status){
        setLogin("Log In")
      } else{
        setLogin("Log Out")
      }
    }

    checkLogIn()
  }, [])

  const handleLogout = ()=>{
    const sendToken = Cookies.get('authToken')
    Cookies.remove(sendToken)
    setLogin("Log In")
    localStorage.getItem('userName')
    alert("Logged Out Successfully")
  }

  return (
    <div>
      <div className="grid w-1/6 sm:grid-cols-1 bg-gray-900 h-full fixed overflow-hidden">
        <ul className="text-white m-5">
            <Link to='/'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black rounded-lg cursor-pointer hover:scale-110 transition transform duration-300">Home</li></Link>
            <Link to='/about'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black rounded-lg cursor-pointer hover:scale-110 transition transform duration-300">About</li></Link>
            <Link to='/BotSelection'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black cursor-pointer hover:scale-110 transition transform duration-300 rounded-lg">Chat Bots</li></Link>
            <Link to='/commAndreview'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black cursor-pointer hover:scale-110 transition transform duration-300 rounded-lg">Communication and Reviews</li></Link>
            {isLoggedIn === 'Log In' ? (
              <Link to='/login'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black cursor-pointer hover:scale-110 transition transform duration-300 rounded-lg">Login</li></Link>
            ) : (
              <li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black cursor-pointer hover:scale-110 transition transform duration-300 rounded-lg" onClick={handleLogout}>{isLoggedIn}</li>
            )}
             
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
