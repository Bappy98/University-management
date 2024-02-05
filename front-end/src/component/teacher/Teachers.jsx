import React from 'react'
import TeacherCard from './TeacherCard'
import Title from '../../util/Tilte/Title'

function Teachers() {
  return (
    <div>
        <div className='mb-24'>
            <Title>TEACHER</Title>
        </div>
        <div className=' grid xl:grid-cols-3 md:grid-cols-2 justify-items-center gap-6 '>
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