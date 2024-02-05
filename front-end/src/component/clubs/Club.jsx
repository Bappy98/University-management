import React from 'react'
import { img1 } from '../../assets/photo'

function Club() {
  return (
   <div className='min-h-[400px] max-w-[500px] bg-slate-400 m-3'>
    <img src={img1} alt="" />
    <div className='p-3'>
        <h2>Spoken club</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis fugiat qui voluptates iure quidem nulla quam itaque eligendi necessitatibus sequi.</p>
        <button className='read-more'>read more</button>
    </div>
   </div>
  )
}

export default Club