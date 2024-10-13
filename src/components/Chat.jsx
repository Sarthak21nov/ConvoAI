/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import send from '../assets/send.png';
import axios from 'axios'
import SendMsg from "./SendMsg";
import RecieveMsg from "./RecieveMsg";
import BotImg from '../assets/bot.jpeg';
import UserImg from '../assets/userImg.png'; 

function Chat(props) {

  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [messages, setMessages] = useState([])
  

  async function generateResponse(){
    // API CALL
      const UserMessage = {role: 'user', text: input}
      setInput("")
      setMessages((prevMessage)=>[...prevMessage, UserMessage])  
      const options = {
        method: 'POST',
        url: 'https://open-ai21.p.rapidapi.com/claude3',
        headers: {
          'x-rapidapi-key': 'b3fb78a65fmsh15f544eaad719a1p12e9dbjsna9880e32747e',
          'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          messages: [
            {
              role: 'user',
              content: input
            }
          ],
          web_access: false
        }
    };

    try {
	    const response = await axios.request(options);
	    console.log(response.data.result);
      var data = response.data.result
      const res_data = {role: 'bot', text: data}
      setResponse(data)
      setMessages((prevMessage)=>[...prevMessage, res_data])
    } catch (error) {
	    console.error(error);
    }
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
        <div className="w-[80%] h-[60px] bg-black flex justify-start shadow-2xl">
            <img src={props.image} className="rounded-full m-2 ml-5 mt-3.5 max-h-[30px] max-w-[30px]"/>
            <h3 className="m-2 text-white pt-2 font-normal text-lg">{props.name}</h3>
        </div>
        <div className="w-[20%] h-[60px] bg-black">
            <a href="/BotSelection"><h3 className="text-lg pl-11 pt-3.5 font-semibold text-white hover:cursor-pointer hover:scale-110 hover:transition hover:transform hover:duration-300">Select Other AI</h3></a>
        </div>
      </div>
      <div>
        <div className="bg-slate-300 min-h-[580px] flex-col overflow-y-auto p-5">
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

export default Chat
