import './App.css'
import Header from './components/Header'
import { restaurants } from './utils/RestoarentData'
import { Outlet } from 'react-router-dom'


function App() {

  const resData = restaurants


  return (
    
    <>
      <div className='w-full h-auto flex flex-col gap-5 p-5'>

        <Header/>
        <Outlet/>
      
      </div>
    </>
  )
  
}


export default App
