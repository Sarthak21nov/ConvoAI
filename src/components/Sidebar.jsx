import { Link } from "react-router-dom"
function Sidebar() {
  return (
    <div>
      <div className="grid w-1/6 sm:grid-cols-1 bg-gray-900 h-full fixed overflow-hidden">
        <ul className="text-white m-5">
            <Link to='/'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black rounded-lg cursor-pointer hover:scale-110 transition transform duration-300">Home</li></Link>
            <Link to='/about'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black rounded-lg cursor-pointer hover:scale-110 transition transform duration-300">About</li></Link>
            <Link to='/BotSelection'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black cursor-pointer hover:scale-110 transition transform duration-300 rounded-lg">Chat Bots</li></Link>
            <Link to='/commAndreview'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black cursor-pointer hover:scale-110 transition transform duration-300 rounded-lg">Communication and Reviews</li></Link>
            <Link to='/login'><li className="m-5 p-4 text-center hover:bg-slate-400 hover:text-black cursor-pointer hover:scale-110 transition transform duration-300 rounded-lg">Login</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
