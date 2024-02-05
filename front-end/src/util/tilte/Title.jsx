import React from 'react'

function Title({children}) {
  return (
    <div className='flex justify-center relative '>
        <div className='relative mx-2 px-2'>
        <h2>{children}</h2>
        <div className='h-1 w-full bg-black rounded-lg'></div>
        </div>
      </div>
  )
}

export default Title