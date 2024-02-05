import React from 'react'
import { img1, teacher } from '../../assets/photo'

function TeacherCard() {
  return (
    <div className=' max-w-[350px]'>
        <div className='h-[400px] max-w-[375px] relative group '>
            <img src={teacher}
             alt="" className='w-full h-full'/>   
        </div>
        <div className='m-1'>
            <h2>Faysal Ahmed</h2>
            <h4>Teacher</h4>
        </div>

        
    </div>
  )
}

export default TeacherCard