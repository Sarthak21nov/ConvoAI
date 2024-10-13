/* eslint-disable react/prop-types */


function SmallCard(props) {
  return (
    <div>
      <div className="w-[300px] h-[200px] bg-slate-300 p-4 pl-5 m-4 ml-8 rounded-xl hover:bg-teal-700 hover:scale-110 hover:text-white shadow-3xl hover:transition hover:transform hover:duration-300 hover:cursor-pointer">
        <img src={props.image} className="h-1/2 m-auto rounded-full pt-2"/>
        <h3 className="text-center pt-4 font-bold">{props.name}</h3>
        <h3 className="text-center font-bold">Role: {props.role}</h3>
      </div>
    </div>
  )
}

export default SmallCard
