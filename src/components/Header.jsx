import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Header() {

  // let BtnName = 'Login'

  const [BtnName , setBtnName] = useState('Login')

  return (
    <div className='w-full h-auto flex justify-between border border-gray-400 p-2 rounded-2xl'>
        <div className='logo-container'>
            <img className='size-8 sm:size-15' src="src/assets/pngegg.png" alt="" />
        </div>
        <div className='flex items-center'>
            <ul className='nav-ul flex gap-5  items-center'>
                <li className='hover:text-red-500 hidden sm:block'>Home</li>
                <Link to={'/about'}><li className='hover:text-red-500 hidden sm:block'>About Us</li></Link>
                <li className='hover:text-red-500 hidden sm:block'>Contact Us</li>
                <li className='hover:text-red-500 hidden sm:block'>Cart</li>
                <button onClick={()=> {BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}} className=' pl-2 pr-2 rounded-md bg-red-500 text-white p-1 cursor-pointer'>{BtnName}</button>
            </ul>
        </div>
    </div>
  )
}
