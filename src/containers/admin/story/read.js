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
    <div className='flex place-content-center w-full h-fit mt-[10px]'>
      <div className='bg-[#3751FF] rounded-[100px] px-[14px] py-[2px]'>
        <button className='mx-3 text-[#ffffff]'  onClick={() => {}}>
                Pay already
        </button>
      </div>   
    </div> 

  </div>
  )
}

export default Read