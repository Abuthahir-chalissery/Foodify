import React, { useEffect } from 'react'
import RestroCard from './RestroCard'
import { useState } from 'react';
import Shimmer from './Shimmer';

export default function RestroContainer({resData}) {
  
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestaurants , setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("")

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4844298&lng=78.3893451&carousel=true&third_party_vendor=1"); 

    const json = await data.json();
    
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  
  // conditional rendering
  return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
    <div className='wfull flex flex-col gap-7 p-3 border border-gray-400 rounded-2xl'>
        <div className='flex gap-5 justify-center'>
            <input className='border pl-2 outline-none border-gray-400 rounded-md' type="text" placeholder='Search...' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}  name="" id="" />
            <button onClick={() => {
              // Filter the restaurant cards and update the UI
              // Search Text
              
              const filteredRestaurents = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
              
              setFilteredRestaurants(filteredRestaurents)
              setSearchText('')
            }} className='cursor-pointer p-1 pl-2 pr-2 rounded-2xl bg-red-500 text-white' >Search</button>
        </div>
        <div className='w-full h-auto flex justify-center gap-5'>
            {/* All items shows */}
            <button onClick={() => {
              setFilteredRestaurants(listOfRestaurants)
            }} className='p-1 rounded-2xl cursor-pointer bg-gray-200 pl-3 pr-3  text-gray-600'>All</button>

            {/* Top Rated button */}
            <button onClick={() => {
              setFilteredRestaurants(listOfRestaurants.filter((res) => res.info.avgRating > 4.2))
              
            }} className='p-2 rounded-3xl cursor-pointer bg-gray-200 pl-2 pr-2  text-gray-600'>Top Rated</button>

        </div>
        <div className='w-full  flex flex-wrap gap-5 h-auto justify-center '>
            {filteredRestaurants.map((res) => (
              <RestroCard key={res.info.id} resData={res}/>
            ))}
            
        </div>
    </div>
  )
}
