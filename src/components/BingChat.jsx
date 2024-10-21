/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import SendMsg from "./SendMsg"
import RecieveMsg from "./RecieveMsg"
import UserImg from '../assets/userImg.png'
import BotImg from '../assets/bot.jpeg'
import send from '../assets/send.png'
import axios from 'axios';

function BingChat(props) {

    const [input, setInput] = useState("")
    const [response, setResponse] = useState("")
    const [messages, setMessages] = useState([])


    function removeMarkdownFormatters(markdown) {
      // Define regex patterns for various Markdown formatters
      const patterns = [
        /\\(.?)\\/g, // Bold: **text*
        /(.*?)/g,     // Bold/Italic: _text_
        // /\(.?)\/g,     // Italic: *text
        /(.*?)/g,       // Italic: text
        /(.*?)/g,     // Strikethrough: ~text~
        /(.*?)/g,       // Inline code: text
        /!\[.?\]\(.?\)/g, // Images: ![alt](url)
        /\[.?\]\(.?\)/g, // Links: [text](url)
        /^#{1,6}\s+/gm,   // Headers: #, ##, ###, etc.
        />\s?/g,          // Blockquote: > text
        /(\r?\n){2,}/g,   // Multiple newlines: convert to single newline
      ];
    
      // Apply all patterns to remove markdown syntax
      let cleanedText = markdown;
      patterns.forEach(pattern => {
        cleanedText = cleanedText.replace(pattern, '$1');
      });
    
      // Remove remaining formatting artifacts like backslashes or extra newlines
      cleanedText = cleanedText.trim();
    
      return cleanedText;
    }
    


    async function generateResponse(){
        // complete this

        const UserMessage = {role: 'user', text: input}
        setMessages((prevMessage)=>[...prevMessage, UserMessage])
        
        const url = 'https://copilot5.p.rapidapi.com/copilot';
        const options = {
	        method: 'POST',
	        headers: {
		        'x-rapidapi-key': 'b3fb78a65fmsh15f544eaad719a1p12e9dbjsna9880e32747e',
		        'x-rapidapi-host': 'copilot5.p.rapidapi.com',
		        'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
		        message: input,
		        conversation_id: null,
		        tone: 'BALANCED',
		        markdown: false,
		        photo_url: null
	        })
        };
        
        setInput("")
        try {
	        const response = await fetch(url, options);
          const result = await response.json()
	        console.log(result);

          const data =  removeMarkdownFormatters(result.data.message)
          setResponse(data)
          const images = result.data.images
          const BotMessage = {role: 'bot',text: data, image:images}  
          setMessages((prevMessage)=>[...prevMessage, BotMessage]) 
        } catch (error) {
	        console.error(error);
        }
  }

    const handleSubmit = (e)=>{
      e.preventDefault()
      if(!input.trim()!==''){
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
        <div className="bg-blue-500 min-h-[580px] max-h-[580px] flex-col overflow-y-auto p-5">
        {messages.map((msg,index)=>{
            return msg.role === 'user' ? <SendMsg key={index} text={msg.text} image={UserImg}/> : <RecieveMsg key={index} text={msg.text} image={BotImg} imageResponse={msg.image}/> 
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

export default BingChat
