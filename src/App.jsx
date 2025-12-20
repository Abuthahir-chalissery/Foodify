import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RestroContainer from './components/RestroContainer'
import { restaurants } from './Data/RestoarentData'
function App() {

  const resData = restaurants

  
  
  

  return (
    <>
      <div className='w-full h-auto flex flex-col gap-5 p-5'>
        <Header/>
        <RestroContainer resData={resData} />
        
        
      </div>
    </>
  )
  
}

export default App
