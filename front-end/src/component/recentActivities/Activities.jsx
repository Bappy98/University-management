import React from 'react'
import ActivityItem from './ActivityItem'
import Title from '../../util/Tilte/Title'

function Activities() {
  return (
    <div>
    <Title>ACTIVITIES</Title>
      <div className='grid 
    gap-3 sm:grid-cols-2 xl:grid-cols-3  justify-items-center'>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
    </div>
    </div>
  )
}

export default Activities