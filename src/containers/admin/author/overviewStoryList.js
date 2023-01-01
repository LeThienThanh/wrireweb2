import React from 'react'
import OverviewStory from './overviewStory'

const OverviewStoryList = ({storyData}) => {
  return (
    <div className='py-1 overflow-y-scroll h-[240px]'>
        {storyData.map((data) => (
        <OverviewStory
        avt={data.avt}
        name={data.name}
        process={data.chapter}
        unpaid={data.unpaid}
        paid={data.paid}    
        />
        ))}
    </div>
  )
}

export default OverviewStoryList