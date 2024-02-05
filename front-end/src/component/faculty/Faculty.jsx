import React from 'react'
import SingleFaculty from './SingleFaculty'
import Title from '../../util/Tilte/Title'

function Faculty() {
  return (
    <div>
         <Title>FACULTY</Title>
        <div className='grid  grid-cols-2 justify-items-center xl:grid-cols-3'>
        <SingleFaculty/>
        <SingleFaculty/>
        <SingleFaculty/>
    </div>
    </div>
  )
}

export default Faculty