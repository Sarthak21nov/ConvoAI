import './App.css'
import Sidebar from './components/Sidebar.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import SunoAI from './Pages/SunoAI.jsx'


function App() {

  return (
    <div>
      <BrowserRouter>
        <div className='grid grid-cols-6'>
          <div className='col-span-1'><Sidebar/></div>
          <div className='col-span-5'>
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
              <Route path='/SunoAI' element={<SunoAI/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
