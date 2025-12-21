import React, { useEffect } from 'react'
import RestroCard from './RestroCard'
import { useState } from 'react';
import Shimmer from './Shimmer';

export default function RestroContainer({resData}) {
  
  const [listOfRestaurants, setListOfRestaurants] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4844298&lng=78.3893451&carousel=true&third_party_vendor=1"); 

    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  
  // conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer/>
  }


  return (
    <div className='wfull flex flex-col gap-7 p-3 border border-gray-400 rounded-2xl'>
        <div className='flex gap-5 justify-center'>
            <input className='border pl-2 outline-none border-gray-400 rounded-md' type="text" placeholder='Search...' name="" id="" />
            <button className='cursor-pointer p-1 pl-2 pr-2 rounded-2xl bg-red-500 text-white' >Search</button>
        </div>
        <div className='w-full h-auto flex justify-center'>
            <button onClick={() => {
              setListOfRestaurants(listOfRestaurants.filter((res) => res.info.avgRating > 4.1))
              
            }} className='p-2 rounded-3xl cursor-pointer bg-gray-200 pl-2 pr-2  text-gray-600'>Top Rated</button>
        </div>
        <div className='w-full  flex flex-wrap gap-5 h-auto justify-center '>
            {listOfRestaurants.map((res) => (
              <RestroCard key={res.info.id} resData={res}/>
            ))}
            
        </div>
    </div>
  )
}
