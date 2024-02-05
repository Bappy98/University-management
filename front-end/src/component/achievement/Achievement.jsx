import React from 'react'
import AchievementCard from './AchievementCard'
import Title from '../../util/Tilte/Title'

function Achievement() {
  return (
    <div>
        <div className='mb-16'>
            <Title>ACHIEVEMENT</Title>
        </div>
        <div className='grid gap-6 grid-cols-2 justify-items-center'>
        <AchievementCard/>
        <AchievementCard/>
        <AchievementCard/>
        <AchievementCard/>
        <AchievementCard/>
    </div>
    </div>
  )
}

export default Achievement