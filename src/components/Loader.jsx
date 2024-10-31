import { Player } from '@lottiefiles/react-lottie-player'
import LoadingAnimation from '../assets/LoadAnimation.json'

function Loader() {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <Player
        src={LoadingAnimation}
        loop
        autoplay 
        className='sm:pt-[10%] pt-[40%]'/>
      </div>
    </div>
  )
}

export default Loader
