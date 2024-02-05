import React from 'react'
import Club from './Club'
import Title from '../../util/Tilte/Title'
import AboutClub from './AboutClub'


function Clubs() {
  return (
   <div className='py-32'>
   
        <Title>CLUBS</Title>
      <div className='grid lg:grid-cols-2'>
      <div>
           <AboutClub/>
        </div>
    <div className='grid md:grid-cols-2 '>
        <Club/>
        <Club/>
    
    </div>
      </div>
   </div>
  )
}

export default Clubs