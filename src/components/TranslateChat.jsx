/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import SendMsg from "./SendMsg"
import RecieveMsg from "./RecieveMsg"
import UserImg from '../assets/userImg.png'
import BotImg from '../assets/bot.jpeg'
import send from '../assets/send.png'
import { Player } from "@lottiefiles/react-lottie-player"
import SorryGif from '../assets/SorryGif.json'

function TranslateChat(props) {

    const [input, setInput] = useState("")
    const [response, setResponse] = useState("")
    const [messages, setMessages] = useState([])


    async function generateResponse(){
        // complete this
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!input.trim !== ''){
            generateResponse()
        }
    }

  return (
    <div>
      <div className="flex w-full">
        <div className="w-[80%] h-[60px] bg-slate-200 flex justify-start shadow-2xl">
            <img src={props.image} className="rounded-full m-2 ml-5 mt-3.5 max-h-[30px] max-w-[30px]"/>
            <h3 className="m-2 text-black pt-2 font-normal text-lg">{props.name}</h3>
        </div>
        <div className="w-[20%] h-[60px] bg-black">
            <a href="/BotSelection"><h3 className="text-lg pl-11 pt-3.5 font-semibold text-white hover:cursor-pointer hover:scale-110 hover:transition hover:transform hover:duration-300">Select Other AI</h3></a>
        </div>
      </div>
      <div>
        <div className="min-h-[580px] bg-gradient-to-r from-blue-500 to-slate-50 flex-col overflow-y-auto p-5">
        <Player src={SorryGif}
          loop
          autoplay
          className="max-h-[350px] max-w-[350px]"/>
          <h3 className="text-center font-serif text-2xl">Sorry! This function is currently unavailable will be available in coming updates. Sorry for inconvenience caused! Look out for other Agents by the time</h3>
          <br/>
          <a href='/BotSelection'><div className="w-[200px] bg-blue-500 text-center p-5 rounded-2xl ml-[500px] hover:cursor-pointer hover:scale-110 hover:transition hover:transform hover:duration-300 ">
            <h3>Choose Other Agent</h3>
          </div> </a>
        </div>
        <div className=" bg-gray-900 min-h-[63px]">
          <form className="flex p-3" onSubmit={handleSubmit}>
            <input type="text" value={input} placeholder="Enter your prompt" 
            onChange = {(e)=>setInput(e.target.value)} 
            className="w-[90%] h-[40px] rounded-2xl pl-3"/>

            <img src={send} className="h-[40px] pl-4 rounded-full hover:cursor-pointer" onClick={generateResponse}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TranslateChat
