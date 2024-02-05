import React from 'react'
import SingleNews from './SingleNews'
import Title from './../../util/tilte/Title'
function FacultyNews() {
  return (
   <div>
    <div className='py-16'>
      <Title>FACULTY NEWS</Title>
    </div>
    <div className='flex flex-wrap justify-center lg:mx-4 mx-2 gap-16 justify-items-center'>
        <SingleNews/>
        <SingleNews/>
        <SingleNews/>
        <SingleNews/>
    </div>
   </div>
  )
}

export default FacultyNews