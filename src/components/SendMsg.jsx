/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


function SendMsg(props) {

  return (
    <div className="w-[100%] justify-end flex">
        {console.log(props.text)}  
      <div className="w-[70%] p-4 bg-slate-950 rounded-lg min-h-[50px] m-4">
        <p className="p-1 text-white" id="data">{props.text}</p>
      </div>
      <img src={props.image} className="max-w-[30px] max-h-[30px] rounded-full"/>
    </div>
  )
}

export default SendMsg
