
// import Navbar from '../components/Navbar'
import Chat from '../components/Chat'
import chatgpt from '../assets/chatgpt.png'

function ChatGPT() {
  return (
    <div>
      <div>
        {/* <Navbar/> */}
        <Chat image={chatgpt} name="ChatGPT"/>
      </div>
    </div>
  )
}

export default ChatGPT
