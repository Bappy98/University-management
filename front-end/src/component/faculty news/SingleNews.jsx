import React from 'react'
import { img1 } from '../../assets/photo'

function SingleNews() {
  return (
    <div className='min-h-[400px] lg:max-w-[500px] max-w-[350px]  rounded-lg shadow-md transform scale-90 hover:scale-100  duration-300 bg-slate-200'>
    <img src={img1} alt="" className='h-[350px] w-full' />
    <div className='m-2 p-2'>
      <p>date:</p>
      <h2>Opening ceremony</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a voluptatum rem assumenda vel distinctio ducimus voluptate consequatur doloribus...</p>
      <button className='read-more'>read more</button>
    </div>
  </div>
  )
}

export default SingleNews