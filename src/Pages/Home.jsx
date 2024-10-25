/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../assets/MainGif.json'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import chatgpt from '../assets/chatgpt.png';
import Llama from '../assets/LlamaLogo.png';
import animation_2 from '../assets/MainGif2.json';
import gemini from '../assets/gemini.png';
import code_llama from '../assets/CodeLLama.png';
import LumaAi from '../assets/Luma.jpeg';
import DallE from '../assets/DallE.jpeg';
import CoPilot from '../assets/Copilot.jpeg';
import Translate from '../assets/GoogleTranslate.png';


function Home() {

  const chatgpt_description = "ChatGPT is an advanced conversational AI by OpenAI, capable of engaging in human-like dialogue on various topics. It understands natural language, maintains context, and offers informative responses, making it suitable for applications like customer support and content generation." 

  const Llama_description = "LLaMA is an advanced AI model created by Meta. It focuses on natural language understanding and generation, offering efficient performance with fewer parameters. LLaMA is designed to assist researchers and developers in exploring AI-driven text-based applications."
  
  const gemini_description = "Gemini is Google DeepMind's advanced AI model designed for natural language understanding and reasoning. It combines large language models with reinforcement learning techniques, enabling it to perform complex tasks, generate human-like text, and improve efficiency in AI-driven applications."

  const codeLlama_description = "Code Llama is an AI model by Meta designed for coding-related tasks. It can understand and generate code in multiple programming languages, assist in debugging, and provide code suggestions, making it a valuable tool for developers to improve productivity and efficiency." 

  const Luma_description = "Luma AI is an innovative platform that uses AI and computer vision to create realistic 3D models and immersive environments from photos and videos. It enables users to generate lifelike 3D assets, perfect for virtual reality, gaming, and digital content creation."

  const DallE_description = "DALL-E is an AI model developed by OpenAI that generates unique images from text descriptions. It can create high-quality artwork, visuals, and imaginative designs based on user prompts, making it valuable for creative projects and digital content generation."

  const Bing_description = "Bing is a search engine developed by Microsoft, providing web, image, video, and map search capabilities. It integrates AI technology to offer intelligent answers, contextual suggestions, and voice search features. Bing is known for enhancing user experience through seamless integration and personalized results."

  const Translate_description = "Google Translate is a multilingual translation service developed by Google. It supports over 100 languages and provides text, speech, image, and real-time translation. Using machine learning and neural networks, it offers contextual and grammar-aware translations for effective communication across different languages."

  return (
    <div>
      {/* <Navbar/> */}
      <div className="min-h-[300px]">
        <div className="flex flex-wrap">
          <h2 className="text-4xl font-semibold p-10 font-poppins-bold-italic w-full h-[100%] text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">YOUR ONE STOP LOCATION FOR ALL AI MODELS.
            <br/>
            <br/>
             "We can only see a short distance ahead, but we can see plenty there that needs to be done" ~Alan Turing.</h2>
          <Player
          src={animation}
          loop
          autoplay
          className='sm:w-[800px] sm:h-full w-full h-full bg-slate-500'
          />
        </div>
        <div id='scroll-section' className='bg-slate-300 p-20 text-lg'>
          <h1 id='scroll-text' className='text-3xl text-slate-800 p-6 scale-110 ease-in font-semibold'>GET SOLUTIONS OF YOUR PROBLEMS FROM MULTIPLE AI AGENTS</h1>
          <p className='font-sans'>Convo.AI is an innovative platform designed to cater to diverse conversational needs through a collection of specialized AI chatbots. Each chatbot is tailored to serve unique use cases, ensuring users find the right solution for their specific requirements. Whether you are looking for assistance in customer support, mental health guidance, language learning, or personalized shopping advice, Convo.AI offers a wide array of options.
          <br/>
          <br/>
          The user-friendly interface allows seamless navigation, making it easy for visitors to choose a chatbot based on their needs. Each chatbot leverages advanced natural language processing (NLP) capabilities, enabling it to engage in meaningful conversations and provide accurate, relevant responses. This enhances user experience and fosters a sense of connection, as users can interact with AI in a way that feels natural.
          <br/>
          <br/>
          Additionally, Convo.AI prioritizes user privacy and data security, ensuring that all interactions remain confidential. By continually updating and refining its chatbot offerings, the platform stays at the forefront of AI technology, making it a go-to destination for anyone seeking intelligent, conversational AI solutions. With Convo.AI, users can explore a world of possibilities where artificial intelligence enhances communication and problem-solving across various domains.</p>
        </div>
        <div className='flex w-[100%] flex-wrap'>
          <Player 
          src={animation_2} 
          loop
          autoplay
          className='w-[60%] p-7'/>
          <h1 className='text-4xl p-20 text-left w-[100%] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600'>Select from Multiple AI models present across the Web based on your requirements</h1>
        </div>
        <div className='inline-flex justify-evenly flex-wrap'>
            <a href="/BotSelection"><Card image={chatgpt} desc={chatgpt_description} name="ChatGPT"/></a>
            <a href="/BotSelection"><Card image={Llama} desc={Llama_description} name="Llama AI"/></a>
            <a href="/BotSelection"><Card image={gemini} desc={gemini_description} name="Gemini AI"/></a>
            <a href="/BotSelection"><Card image={code_llama} desc={codeLlama_description} name="Code Llama"/>
            </a>
            <a href="/BotSelection"><Card image={LumaAi} desc={Luma_description} name="Luma AI"/></a>
            <a href="/BotSelection"><Card image={DallE} desc={DallE_description} name="Dall-E"/></a>
            <a href="/BotSelection"><Card image={CoPilot} desc={Bing_description} name="Bing"/></a>
            <a href="/BotSelection"><Card image={Translate} desc={Translate_description} name="Google Translate"/></a>
        </div>
      </div>
    </div>
  )
}

export default Home
