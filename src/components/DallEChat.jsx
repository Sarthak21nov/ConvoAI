/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import SendMsg from "./SendMsg"
import RecieveMsg from "./RecieveMsg"
import UserImg from '../assets/userImg.png'
import BotImg from '../assets/bot.jpeg'
import send from '../assets/send.png'

function DallEChat(props) {

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
        <div className="w-[80%] h-[60px] bg-purple-800 flex justify-start shadow-2xl">
            <img src={props.image} className="rounded-full m-4 max-h-[30px] max-w-[30px] pt-2"/>
            <h3 className="m-2 text-white pt-3 font-normal text-lg">{props.name}</h3>
        </div>
        <div className="w-[20%] h-[60px] bg-black">
            <a href="/BotSelection"><h3 className="text-lg pl-3 pt-5 font-semibold text-white hover:cursor-pointer hover:scale-110 hover:transition hover:transform hover:duration-300">BACK</h3></a>
        </div>
      </div>
      <div>
        <div className="bg-blue-500 h-[78vh] flex-col overflow-y-auto p-5">
        {messages.map((msg,index)=>{
            return msg.role === 'user' ? <SendMsg key={index} text={msg.text} image={UserImg}/> : <RecieveMsg key={index} text={msg.text} image={BotImg}/> 
          })}
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

export default DallEChat
