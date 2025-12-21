import React, { useState } from 'react'


export default function Header() {

  // let BtnName = 'Login'

  const [BtnName , setBtnName] = useState('Login')

  return (
    <div className='w-full h-auto flex justify-between border border-gray-400 p-2 rounded-2xl'>
        <div className='logo-container'>
            <img className='size-15' src="src/assets/pngegg.png" alt="" />
        </div>
        <div className='flex items-center'>
            <ul className='nav-ul flex gap-5 items-center'>
                <li className='hover:text-red-500'>Home</li>
                <li className='hover:text-red-500'>About Us</li>
                <li className='hover:text-red-500'>Contact Us</li>
                <li className='hover:text-red-500'>Cart</li>
                <button onClick={()=> {setBtnName("Logout ")}} className=' pl-2 pr-2 rounded-md bg-red-500 text-white p-1 cursor-pointer'>{BtnName}</button>
            </ul>
        </div>
    </div>
  )
}
