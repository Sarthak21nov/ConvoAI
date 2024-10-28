/* eslint-disable react/prop-types */


function RecieveMsg(props) {
  const res = props.text
  return (
    <div className="w-[100%] justify-start">
        {console.log(props.text)}
      <img src={props.image} className="max-w-[30px] min-h-[30px] rounded-full"/>  
      <div className="w-[70%] p-4 bg-teal-500 rounded-3xl min-h-[50px] m-4 hover:cursor-pointer hover:bg-slate-700 hover:scale-105 hover:transition hover:transform hover:duration-300">
        <pre><p className="p-1 text-white font-serif text-sm text-wrap">{res}</p></pre>
      </div>
    </div>
  )
}

export default RecieveMsg
