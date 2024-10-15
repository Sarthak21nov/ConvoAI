import { useState } from "react"


function Forget() {

  const [code, setCode] = useState("")

  function checkOTP() {
    setCode("")
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!code.trim()!==""){
        checkOTP()
    }
  }

  return (
    <div>
      <div className='min-h-[710px] bg-gradient-to-r from-slate-700 to-white flex justify-center items-center'>
        <div className="min-w-[300px] min-h-[300px] bg-white rounded-2xl shadow-2xl pt-[40px]">
            <p className="m-4 mt-6">An OTP is sent to the Registered mail-id</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter OTP" value={code} onChange={(e)=>setCode(e.target.value)} className="shadow-2xl p-5 ml-4 w-[250px]" required/>
            </form>
            <div className="m-auto bg-slate-800 text-white pt-1 pb-2 rounded-2xl mt-3 hover:cursor-pointer shadow-2xl hover:transition hover:transform hover:duration-500 hover:scale-110 max-w-[90px] pl-4" onClick={checkOTP}>
                <p>Sign Up</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Forget
