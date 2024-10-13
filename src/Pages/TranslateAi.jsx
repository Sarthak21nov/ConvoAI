import googleImg from '../assets/GoogleTranslate.png'
import TranslateChat from '../components/TranslateChat'

function TranslateAi() {
  return (
    <div>
      <div>
        <TranslateChat image={googleImg} name="Google Translator"/>
      </div>
    </div>
  )
}

export default TranslateAi
