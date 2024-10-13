import CodeLlamaChat from "../components/CodeLlamaChat"
import CodeImg from '../assets/CodeLLama.png'

function CodeLlama() {
  return (
    <div>
      <div>
        <CodeLlamaChat image={CodeImg} name="Code Llama AI"/>
      </div>
    </div>
  )
}

export default CodeLlama
