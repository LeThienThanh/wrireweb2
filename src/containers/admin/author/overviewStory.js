import React from 'react'

const OverviewStory = ({avt, name, process, approve, paid, unpaid}) => {
  return (
    <div className='flex'>

      <div className='text-[#9FA2B4] ml-[20px] mt-[10px] font-bold text-sm w-[50px] h-[50px]'>
        <img src={avt} alt='Hinh'></img>
      </div>

      <div className='text-[#252733] ml-[8px] mt-[13px] font-bold text-sm'>
        <p className=''>{name}</p>
      </div>

      <div className='mt-[10px] ml-[148px] font-bold text-sm text-[#252733]'>
          <p>{process}</p>
          <div className='text-[#C5C7CD] text-[10px]'>
              <p className=''>{approve}</p>
          </div>
      </div>

      <div className='mt-[8px] ml-[170px] font-bold text-sm text-[#C61C1C]'>
          <p>{unpaid}$</p>
          <div className='text-[#35C655] text-sm font-bold'>
              <p className=''>{paid}$</p>
          </div>
      </div>
                        
    </div>
  )
}

export default OverviewStory