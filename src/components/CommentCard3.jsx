/* eslint-disable react/prop-types */
import ratings from "../assets/star-solid.svg"
function CommentCard3(props) {
  return (
    <div>
      <div className="min-h-[310px] bg-slate-200 min-w-[300px] m-7 rounded-2xl shadow-2xl">
        <img src={props.image} alt="Img" className="rounded-full m-auto pt-5 h-[100px]" loading="lazy"/>
        <p className="text-center font-semibold">{props.name}</p>
        <div className="flex w-[30px] h-[15px] ml-[35%]">
            <img src={ratings}/>
            <img src={ratings}/>
            <img src={ratings}/>
            <img src={ratings}/>
        </div>
        <p className="text-wrap pr-6 pl-6">{props.text}</p>
      </div>
    </div>
  )
}

export default CommentCard3