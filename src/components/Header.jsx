import React from 'react'


export default function Header() {
  return (
    <div className='w-full h-auto flex justify-between border border-gray-400 p-2 rounded-2xl'>
        <div className='logo-container'>
            <img className='size-15' src="src/assets/pngegg.png" alt="" />
        </div>
        <div className='flex items-center'>
            <ul className='nav-ul flex gap-5'>
                <li className='hover:text-red-500'>Home</li>
                <li className='hover:text-red-500'>About Us</li>
                <li className='hover:text-red-500'>Contact Us</li>
                <li className='hover:text-red-500'>Cart</li>
            </ul>
        </div>
    </div>
  )
}
