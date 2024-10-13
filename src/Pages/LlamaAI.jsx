import LlamaChat from "../components/LlamaChat"
import llama from "../assets/llamaLogo.png"

function LlamaAI() {
  return (
    <div>
      <div>
        {/* <Navbar/> */}
        <LlamaChat image={llama} name="Llama AI"/>
      </div>
    </div>
  )
}

export default LlamaAI
