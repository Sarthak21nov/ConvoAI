/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Card(props) {
  return (
    <div className='p-10'>
      <div className='w-[300px] h-[350px] bg-slate-200 rounded-lg shadow-4xl hover:bg-slate-800 hover:cursor-pointer hover:text-white hover:scale-110 hover:transition hover:transform hover:duration-300'>
        <div className='rounded-lg'>
            <img src={props.image} className='w-1/2 h-1/3 m-auto p-3 rounded-full'/>
            <h3 className='text-center font-bold'>{props.name}</h3>
        </div>
        <div>
            <p className='p-4 text-sm font-medium'>{props.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
