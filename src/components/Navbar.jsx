/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Menu from '../assets/menu.png'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Navbar() {

  const [isMenuOpen, SetMenu] = useState(false)
  const [isLogin, setLogin] = useState(false)
  const navigate = useNavigate()

  const ToggleNavbar = ()=>{
    SetMenu(!isMenuOpen)
  }

  const Token = Cookies.get('Token')

  useEffect(()=>{
    setLogin(!!Token)
  }, [Token])

  const handleLogout = () => {
    Cookies.remove('Token')
    localStorage.removeItem('userName')
    localStorage.removeItem('authToken')
    localStorage.removeItem('islogin')
    alert("Logged Out Successfully")
    setLogin(false)
    navigate('/login')
  }

  return (
    <div className='fixed left-0 top-0 w-full z-10'>
      <div className='flex min-h-[80px] bg-gray-900 items-center'>
        <div className='flex items-center' onClick={ToggleNavbar}>
          <img
            src={Menu}
            className='max-h-[40px] max-w-[40px] hover:scale-110 hover:transition hover:duration-300 block sm:hidden'
            alt="Menu Icon"
            loading='lazy'
          />
        </div>
        <div className='flex flex-grow justify-center items-center'>
          <h2 className='text-white font-bold text-2xl'>Convo.AI</h2>
        </div>
      </div>
      {isMenuOpen && (
        <div className='sm:hidden bg-white min-w-[40%] max-w-[40%] flex flex-col border-black border-solid border-2 shadow-2xl absolute'>
          <div>
            <a href='/'><p className='text-center hover:bg-slate-800 hover:text-white p-2 hover:cursor-pointer'>Home</p></a>
          </div>
          <hr />
          <div>
            <a href='/about'><p className='text-center hover:bg-slate-800 hover:text-white p-2 hover:cursor-pointer'>About</p></a>
          </div>
          <hr />
          <div>
            <a href='/BotSelection'><p className='text-center hover:bg-slate-800 hover:text-white p-2 hover:cursor-pointer'>ChatBots</p></a>
          </div>
          <hr />
          <div>
            <a href='/commAndreview'><p className='text-center hover:bg-slate-800 hover:text-white p-2 hover:cursor-pointer'>Reviews</p></a>
          </div>
          <hr />
          {isLogin ? (
            <div>
              <p className='text-center hover:bg-slate-800 hover:text-white p-2 hover:cursor-pointer' onClick={handleLogout}>Log Out</p>
            </div>
          ) : (
            <div>
              <a href='/login'><p className='text-center hover:bg-slate-800 hover:text-white p-2 hover:cursor-pointer'>Login</p></a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar

