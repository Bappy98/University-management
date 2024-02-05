import React from 'react'
import { banner1, img1 } from '../../assets/photo'

function AchievementCard() {
  return (
    <div className='max-w-[500px]'>
      <div>
        <img src={banner1} alt="" />
      </div>
      <div>
        <p>Date:</p>
        <h2>Title:</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur autem iste ipsa veniam? Corrupti.</p>
        <button className='read-more'>read more</button>
      </div>
    </div>
  )
}

export default AchievementCard