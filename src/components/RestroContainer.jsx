import React, { use, useEffect } from 'react'
import RestroCard from './RestroCard'
import { useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus  from '../utils/useOnlineStatus'

export default function RestroContainer({resData}) {
  
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestaurants , setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("")
  const [loading, setLoading] = useState(true)
  const [error , setError] = useState("")

  

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    setLoading(true)
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4844298&lng=78.3893451&carousel=true&third_party_vendor=1"); 

    const json = await data.json();
    
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setLoading(false)
  }  

  const onlineStatus = useOnlineStatus()

  if (onlineStatus == false) return <h1>No internet broo pls check!</h1>
  
  // conditional rendering
  return loading? (<Shimmer/>) : (
    
    <div className='Body wfull flex flex-col gap-7 p-3 border border-gray-400 rounded-2xl'>
        <div className='flex gap-5 justify-center'>
            <input className='w-full max-w-100 border pl-2 outline-none border-gray-400 rounded-md' type="text" placeholder='Search...' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}  name="" id="" />
            <button onClick={() => {
              // Filter the restaurant cards and update the UI
              // Search Text
              const filteredRestaurents = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
              setLoading(true)
              if (filteredRestaurents.length == 0){
                setError('No match found!')
              }else{
                setError('')
              }
              setFilteredRestaurants(filteredRestaurents)
              setTimeout(() => {
                setLoading(false)
              }, 1000);
            }} className='cursor-pointer p-1 pl-2 pr-2 rounded-2xl bg-red-500 text-white' enterKeyHint='hello' >Search</button>
        </div>
        <div className='w-full h-auto flex justify-center gap-5'>
            {/* All items shows */}
            <button onClick={() => {
              setLoading(true)
              setSearchText('')
              setError('')
              setFilteredRestaurants(listOfRestaurants)
              setTimeout(() => {
                setLoading(false)
              }, 1000);
            }} className='p-1 rounded-2xl cursor-pointer bg-gray-200 pl-3 pr-3  text-gray-600'>All</button>

            {/* Top Rated button */}
            <button onClick={() => {
              setFilteredRestaurants(listOfRestaurants.filter((res) => res.info.avgRating > 4.4))
              setError('')
              
            }} className='p-2 rounded-3xl cursor-pointer bg-gray-200 pl-2 pr-2  text-gray-600'>Top Rated</button>

        </div>
        <div className='w-full  flex flex-wrap gap-5 h-auto justify-center '>
            {error &&(<h1 className='font-semibold text-red-700'>{`${error}`}</h1>) }
            {filteredRestaurants.map((res) => (
              <Link key={res.info.id} to={'/restaurent/'+res?.info?.id}><RestroCard  resData={res} /></Link>
              
            ))}
            
            
        </div>
    </div>
  )
}
