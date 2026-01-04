import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext'


export default function Header() {

  const {loggedInUser} = useContext(UserContext)
  

  // let BtnName = 'Login'

  const [BtnName , setBtnName] = useState('Login')

  return (
    <div className='w-full h-auto flex justify-between border border-gray-400 p-2 rounded-2xl'>
        <div className='logo-container'>
            <img className='size-8 sm:size-15' src="/src/assets/pngegg.png" alt="" />
        </div>
        <div className='flex items-center'>
            <ul className='nav-ul flex gap-5  items-center'>
                <Link to={'/'}><li className='hover:text-red-500 hidden sm:block'>Home</li></Link>
                <Link to={'/about'}><li className='hover:text-red-500 hidden sm:block'>About Us</li></Link>
                <Link to={'/contact'}><li className='hover:text-red-500 hidden sm:block'>Contact Us</li></Link>
                <Link to={'/cart'}><li className='hover:text-red-500 hidden sm:block'>Cart</li></Link>
                <button onClick={()=> {BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}} className=' pl-2 pr-2 rounded-md bg-red-500 text-white p-1 cursor-pointer'>{BtnName}</button>
                <h1>{loggedInUser}</h1>
            </ul>
        </div>
    </div>
  )
}
