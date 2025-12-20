import React from 'react'
import RestroCard from './RestroCard'

export default function RestroContainer({resData}) {
  
  
  return (
    <div className='wfull flex flex-col gap-5 p-3 border border-gray-400 rounded-2xl'>
        <div className='flex gap-5 justify-center'>
            <input className='border pl-2 outline-none border-gray-400 rounded-md' type="text" placeholder='Search...' name="" id="" />
            <button className='cursor-pointer p-1 pl-2 pr-2 rounded-2xl bg-red-500 text-white' >Search</button>
        </div>
        <div className='w-full  flex flex-wrap gap-5 h-auto justify-center '>
            {resData.map((res) => (
              <RestroCard key={res.info.id} resData={res}/>
            ))}
            
        </div>
    </div>
  )
}
