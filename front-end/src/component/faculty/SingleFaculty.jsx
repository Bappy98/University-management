import React from 'react'
import { banner1 } from '../../assets/photo'

function SingleFaculty() {
  return (
    <div className='h-[400px] w-[400px] relative  cursor-pointer group z-40 overflow-hidden'>
    <div className='group-hover:opacity-80'>
    <img src={banner1} alt="" className=' h-full w-full' />
    </div>
    <div className='absolute h-full w-full bg-slate-700  opacity-40 z-0 group-hover:animate-move1 translate-y-[-20%] '> 
    </div>
    <h2 className='absolute bottom-0 text-white  px-2 right-0 left-0 m-auto text-center mb-3 group-hover:hidden'>CSE</h2>
    <div className='absolute top-1/2  left-32 hidden group-hover:block'>
     <h2 className='text-center text-white'>kamran</h2>
    </div>
    </div>
  )
}

export default SingleFaculty