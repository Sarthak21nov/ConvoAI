import { useState } from "react"


function ChangePassword() {
  const [old, setOld] = useState("")  
  const [newPass, setNewPass] = useState("")

  function Change(){
    checkValid()
    if(old !== newPass){
        alert("Old Password and New Password didn't match")
    }
  }

  function checkValid(){
    if(!old || !newPass){
      alert("All fields are mandatory")
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!old.trim()!=="" || !newPass.trim()!==""){
        Change()
    }
  }
  return (
    <div>
      <div className="min-h-[710px] bg-gradient-to-r from-slate-700 to-white flex justify-center items-center">
        <div className="min-w-[300px] min-h-[300px] bg-white rounded-2xl shadow-2xl pt-[40px]">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="password" placeholder="Enter New Password" value={old} onChange={(e)=>setOld(e.target.value)} className="shadow-2xl p-5 ml-4 w-[250px] m-4" required/> 
                <input type="password" placeholder="Confirm New Password" value={newPass} onChange={(e)=>setNewPass(e.target.value)} className="shadow-2xl p-5 ml-4 w-[250px]" required/>
            </form>
            <div className="m-auto bg-slate-800 text-white pt-1 pb-2 rounded-2xl mt-3 hover:cursor-pointer shadow-2xl hover:transition hover:transform hover:duration-500 hover:scale-110 max-w-[120px] pl-4" onClick={Change}>
                <p>Set Password</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
