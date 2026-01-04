import React from 'react'
import { CON_URL } from '../utils/constants'




export default function RestroCard(props) {

    const { resData } = props
    
    const {name,cloudinaryImageId,cuisines,costForTwo,sla,avgRating} = resData?.info
    
    
    
  return (
    <div className='w-70 h-100 justify-between overflow-hidden  border itece p-2 border-gray-100 hover:border-gray-400 bg-gray-100 flex flex-col   gap-2 rounded-md'>
        <div className='w-full h-auto '>
          <img className='w-full rounded-md cursor-pointer h-50 object-center object-cover' src={CON_URL + cloudinaryImageId} alt="No photo" />
        </div>
        <h1 className='text-lg font-semibold'>{name}</h1>
        <h4 className='text-sm '>{cuisines.join(", ")}</h4>
        <h1 className='font-semibold'>{costForTwo }</h1>
        <div className='flex text-nowrap justify-between items-center'>
            <h4 className='text-sm font-semibold bg-green-400 pl-1 pr-1 rounded-sm'>{avgRating} </h4>
            <h4 className='font-semibold'>{sla.deliveryTime} Minutes</h4>
        </div>
        
    </div>
  )
}
  