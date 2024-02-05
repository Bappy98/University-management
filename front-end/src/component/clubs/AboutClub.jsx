import React from 'react'
import { img1 } from '../../assets/photo'

function AboutClub() {
  return (
    <div className='min-h-[400px] min-w-[700px]  bg-slate-400 m-3 lg:min-w-[400px]'>
    <img src={img1} alt="" />
    <div className='p-3'>
        <h2>About club</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis fugiat qui voluptates iure quidem nulla quam itaque eligendi necessitatibus sequi.</p>
        <button className='read-more'>read more</button>
    </div>
   </div>
  )
}

export default AboutClub