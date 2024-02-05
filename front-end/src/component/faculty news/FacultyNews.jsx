import React from 'react'
import SingleNews from './SingleNews'
import Title from './../../util/tilte/Title'
function FacultyNews() {
  return (
   <div>
    <div className='mb-16'>
      <Title>FACULTY NEWS</Title>
    </div>
    <div className='grid xl:grid-cols-2 gap-6 justify-items-center'>
        <SingleNews/>
        <SingleNews/>
        <SingleNews/>
        <SingleNews/>
    </div>
   </div>
  )
}

export default FacultyNews