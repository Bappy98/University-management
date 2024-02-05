import React from 'react'
import TeacherCard from './TeacherCard'
import Title from '../../util/Tilte/Title'

function Teachers() {
  return (
    <div>
        <div className='mb-24'>
            <Title>TEACHER</Title>
        </div>
        <div className=' flex justify-center flex-wrap gap-16 justify-items-center lg:mx-16 mx-2 '>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
    </div>
    </div>
  )
}

export default Teachers