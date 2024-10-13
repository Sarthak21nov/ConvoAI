import Navbar from '../components/Navbar.jsx'
import SmallCard from '../components/SmallCard.jsx'
import chatgpt from '../assets/chatgpt.png'
import Llama from '../assets/llamaLogo.png'
import CoPilot from '../assets/Copilot.jpeg'
import codeLlama from '../assets/CodeLLama.png'
import Dalle from '../assets/DallE.jpeg'
import gemini from '../assets/gemini.png'
import translate from '../assets/GoogleTranslate.png'
import Luma from '../assets/Luma.jpeg'


function ChatBots() {

  return (
    <div>
      <Navbar/>
      <div className="text-center">
        <h3 className="text-5xl p-5 pt-12 font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-violet-600">Select an AI Engine</h3>
      </div>
      <div className='flex flex-wrap justify-evenly mt-7'>
        <a href='/ChatGPT'><SmallCard image={chatgpt} name="ChatGPT" role="Conversational Chatbot"/></a>
        <a href='/LlamaAI'><SmallCard image={Llama} name="LlamaAi" role="Research and experimentation Chatbot"/></a>
        <a href='/BingAI'><SmallCard image={CoPilot} name="Copilot AI" role="Conversational Chatbot with Generational Capabilities "/></a>
        <a href='/CodeLlamaAI'><SmallCard image={codeLlama} name="Code Llama" role="Coding Chatbot"/></a>
        <a href='/DallE'><SmallCard image={Dalle} name="DALL-E" role="Image-Generation Chatbot"/></a>
        <a href='/Gemini'><SmallCard image={gemini} name="Google Gemini" role="Conversational Chatbot with image-processing feature"/></a>
        <a href='/Google-Translate'><SmallCard image={translate} name="Google Translator" role="Language Translation Chatbot"/></a>
        <a href='/LumaAI'><SmallCard image={Luma} name="Luma AI" role="3-D image Generating Chatbot"/></a>
      </div>
    </div>
  )
}

export default ChatBots
