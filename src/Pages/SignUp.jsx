import { useState } from "react"


function SignUp() {

  const [input, setInput] = useState("") 
  const [password, setPassword] = useState("") 
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("") 
  const [checked, setChecked] = useState(false)

  function Sign_Up (){
    checkError()
    setInput("")
    setPassword("")
    setEmail("")
    setPhone("")
    setChecked(false)
  }  

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!input!==""){
      SignUp()
    }
  }

  const handleCheckbox = ()=>{
    setChecked(!checked)
  } 

  const checkError = ()=>{
    if(!input || !password || !Email || !Phone || checked){
      alert("All fields are mandatory")
    }
  }

  return (
    <div>
        <div className="bg-gradient-to-r from-slate-800 to-white min-h-[710px] flex justify-center items-center">
            <div className="min-w-[400px] min-h-[500px] bg-white rounded-2xl shadow-2xl">
                <h2 className="font-semibold ml-4 mt-4 p-4 text-3xl">Sign Up</h2>
                <p className="pl-5 ml-3">Sign Up for using ConvoAI</p>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input type="text" placeholder="Name" value={input} onChange={(e)=>setInput(e.target.value)} className="p-4 m-4 w-[350px] shadow-2xl mb-2" required/>
                    <input type="email" placeholder="E-mail ID" value={Email} onChange={(e)=>setEmail(e.target.value)} className="p-4 mt-1 ml-4 mb-2 w-[350px] shadow-2xl" required/>
                    <input type="text" placeholder="Phone Number" value={Phone} onChange={(e)=>setPhone(e.target.value)} className="p-4 mt-1 ml-4 mb-2 w-[350px] shadow-2xl" required/>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="p-4 mt-1 ml-4 mb-2 w-[350px] shadow-2xl" required/>
                    <div className="flex ml-2">
                        <input type="checkbox" value={checked} onChange={handleCheckbox} className="p-4 mt-1 ml-4 mb-2 mr-2 shadow-2xl" required/> Agree to our terms and conditions <a href='#' className="text-blue-800">T&C</a>
                    </div>
                    <div className="m-auto bg-slate-800 text-white pt-2 pb-2 pl-8 pr-8 rounded-2xl mt-3 hover:cursor-pointer shadow-2xl hover:transition hover:transform hover:duration-500 hover:scale-110" onClick={Sign_Up}>
                        <p>Sign Up</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp
