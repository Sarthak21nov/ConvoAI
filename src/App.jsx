/* eslint-disable no-unused-vars */
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import ChatBots from './Pages/ChatBots.jsx'
import Reviews from './Pages/Reviews.jsx'
import ChatGPT from './Pages/ChatGPT.JSX'
import LlamaAI from './Pages/LlamaAI.jsx'
import BingAI from './Pages/BingAI.jsx'
import CodeLlama from './Pages/CodeLlama.jsx'
import DallE from './Pages/DallE.jsx'
import Gemini from './Pages/Gemini.jsx'
import TranslateAi from './Pages/TranslateAi.jsx'
import LumaAI from './Pages/LumaAI.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import Forget from './Pages/forget.jsx'
import ChangePassword from './Pages/ChangePassword.jsx'
import Verification from './Pages/Verification.jsx'
import Navbar from './components/Navbar.jsx'
import Loader from './components/Loader.jsx'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'


function App() {

  const [IsLoading, SetLoading] = useState(true)
  const [promptCounter, setPromptCount] = useState(0)

  useEffect(()=>{
    const loading = async () => {
      SetLoading(true)
      await new Promise((resolve)=> setTimeout(resolve, 2000))
      SetLoading(false)
    }
    loading()
  }, [])

  useEffect(()=>{
    localStorage.setItem('PromptCounter', promptCounter)
    const Token = Cookies.get('Token')
    if(promptCounter>4){
      if(!Token){
        alert("You have exceeded the free limit of the Prompt Generations. Please login in order to keep using ConvoAI platform.")
      }
    }
  },[promptCounter])



  return (
    <div>
      {IsLoading ? (
        <Loader />
      ) : (
      <BrowserRouter>
      <Navbar />
        <div className='sm:grid sm:grid-cols-6 overflow-x-hidden overflow-y-auto pt-[70px]'>
          <div className='sm:col-span-1 sm:block hidden'><Sidebar/></div>
          <div className='sm:col-span-5 sm:overflow-hidden h-[100%]'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/BotSelection' element={<ChatBots/>}/>
              <Route path='/commAndreview' element={<Reviews/>}/>
              <Route path='/ChatGPT' element={<ChatGPT/>}/>
              <Route path='/LlamaAI' element={<LlamaAI/>}/>
              <Route path='/BingAI' element={<BingAI/>}/>
              <Route path='/CodeLlamaAI' element={<CodeLlama/>}/>
              <Route path='/DallE' element={<DallE/>}/>
              <Route path='/Gemini'element={<Gemini/>}/>
              <Route path='/Google-Translate' element={<TranslateAi/>}/>
              <Route path='/LumaAI' element={<LumaAI/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/SignUp' element={<SignUp/>}/>
              {/* <Route path='/forget' element={<Forget/>}/>
              <Route path='/changePassword' element={<ChangePassword/>}/> */}
              {/* <Route path='/verification' element={<Verification/>}/> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      )}
    </div>
  )
}

export default App
