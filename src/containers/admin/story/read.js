import React from 'react'

import Content from './content'

const Read = () => {
  return (
  <div className='flex-col w-[800px] h-fit mx-[200px]'>
    
    <div className='flex items-center w-[800px]'>

      <div className='mx-[200px] w-full items-center'>
        <div className='text-[36px] text-center w-full bg-transparent'>
          Chapter 1
        </div>
        <div className='text-[16px] w-full text-center'>Chapter</div>
      </div>
      
    </div>

    <Content/>
  </div>
  )
}

export default Read