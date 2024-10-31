/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import send from '../assets/send.png';
import axios from 'axios'
import SendMsg from "./SendMsg";
import RecieveMsg from "./RecieveMsg";
import BotImg from '../assets/bot.jpeg';
import UserImg from '../assets/userImg.png'; 
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function GeminiChat(props) {

  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [messages, setMessages] = useState([])
  const [typed, setTyped] = useState("")
  const navigate = useNavigate()

  async function generateResponse(){
    const userMessage = {role:'user', text: input}
    setInput("")
    setMessages((prevMessages)=>[...prevMessages, userMessage])

    // API CALL
    const res = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCovEC5-RDcniQMgNGaoSiUyZtRPBzDSx0",
      method: "post",
      headers: {
        "Content-Type": "application/json" 
      },
      data: {
        contents: [
          {
            parts: [
              { text: input } 
            ]
          }
        ]
      }
    });
    console.log(res.data.candidates[0].content.parts[0].text)
    setResponse(res.data.candidates[0].content.parts[0].text)
    var output = res.data.candidates[0].content.parts[0].text
    const reply = {role:"bot", text: output}
    setMessages((prevMessages)=>[...prevMessages, reply])
    const Token = Cookies.get('Token')
    let count = parseInt(localStorage.getItem('PromptCounter'), 10) || 0
    count += 1;
    if(count >= 4){
      if(!Token){
        alert("Oh! You have reached maximum limits of free generations present here. Please login in to Continue using ConvoAI")
        navigate('/login')
      }
    } 
    localStorage.setItem('PromptCounter', count)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!input.trim() !==''){
      generateResponse()
    }
  }

  return (
    <div>
      <div className="flex w-full">
        <div className="w-[80%] h-[60px] bg-slate-200 flex justify-start shadow-2xl">
            <img src={props.image} className="rounded-full m-4 max-h-[30px] max-w-[30px] pt-2"/>
            <h3 className="m-2 text-black pt-3 font-normal text-lg">{props.name}</h3>
        </div>
        <div className="w-[20%] h-[60px] bg-black">
            <a href="/BotSelection"><h3 className="text-lg pl-3 pt-5 font-semibold text-white hover:cursor-pointer hover:scale-110 hover:transition hover:transform hover:duration-300">BACK</h3></a>
        </div>
      </div>
      <div> 
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-[78vh] flex-col overflow-y-auto p-5">
          {messages.map((msg,index)=>{
            return msg.role === 'user' ? <SendMsg key={index} text={msg.text} image={UserImg}/> : <RecieveMsg key={index} text={msg.text} image={BotImg}/> 
          })}
          {console.log(messages)}
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

export default GeminiChat
