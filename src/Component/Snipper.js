import React from 'react'
import './Snipper.css' 

const Snipper = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className='spinner'></div>
        <p className='text-bgDark text-lg font-semibold'>Loading...</p>
    </div>
  )
}

export default Snipper