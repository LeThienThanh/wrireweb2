import React from 'react'
import { useNavigate } from 'react-router-dom'
import { eren } from '../../../assets'
import { meo1 } from '../../../assets'
import OverviewStoryList from './overviewStoryList'

import { storydatalist } from './storydatalist'
const Detail_Author_ad = () => {
const navigate = useNavigate()
    return (
        <div className='flex-col shadow-2xl w-[1020px] h-[537px] border rounded-lg bg-[#F7F8FC] ml-[70px]'>   
            <div className='flex pl-10 pt-5'>
                <img src={eren} alt='avt' className='rounded-full w-[150px] h-[150px] '/>
                <div className='pl-10 pt-12 pr-[120px]'>
                    <p className='text-[40px]'>Lê Tiến</p>
                </div>
                <div className='flex' >
                    <div className='w-[227px] h-[134px] bg-[#ffffff] shadow-2xl rounded-lg border border-[#BFB17C]'>
                        <p className='text-center pt-5 text-[#D0AB4C] text-[20px]'>
                            Unpaid
                        </p>
                        <p className='text-center pt-3 text-4xl text-bold text-[#D0AB4C]'>
                            200$
                        </p>
                    </div>
                    <div className='w-[227px] h-[134px] bg-[#ffffff] shadow-2xl rounded-lg border border-[#3751FF] ml-[40px]' >
                        <p className='text-center pt-5 text-[#3751FF] text-[20px]'>
                            Paid
                        </p>
                        <p className='text-center pt-3 text-4xl text-bold text-[#3751FF]'>
                            2000$
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F12B2C] shadow-2xl rounded-full w-[70px] h-[20px] mb-3 text-sm text-center ml-[900px]'>
                <a href=''>
                    <button className='text-[#ffffff]' >
                        Delete
                    </button>
                </a>
            </div>
            <div className='shadow-2xl border-t-[#DFE0EB]-500 w-[1020px] h-[347px] border rounded-lg bg-[#F7F8FC]'>
                <div className='text-[#252733] text-xl font-bold ml-[20px] mt-[20px]'>
                    <h1>All Work</h1>
                </div>
                <div onClick={()=>navigate('/story/detail')}>
                    <div className='flex pb-3'>
                        <div className='text-[#9FA2B4] ml-[20px] mt-[20px] font-bold text-sm'>
                            <p>Story</p>
                        </div>
                        <div className='text-[#9FA2B4] ml-[280px] mt-[20px] font-bold text-sm'>
                            <p>Progress</p>
                        </div>
                        <div className='text-[#9FA2B4] ml-[100px] mt-[20px] font-bold text-sm'>
                            <p>Pay For Each Work</p>
                        </div>
                        <div className='text-[#9FA2B4] ml-[100px] mt-[20px] font-bold text-sm'>
                            <p>Paid Status</p>
                        </div>
                        
                    </div>

                    <div className=' items-center'>
                        <OverviewStoryList storyData={storydatalist}/>
                    </div>
                    
                 
                    
                </div>
            </div>
        </div>
    )
}

export default Detail_Author_ad