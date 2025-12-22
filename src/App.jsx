import './App.css'
import Header from './components/Header'
import RestroContainer from './components/RestroContainer'
import { restaurants } from './utils/RestoarentData'

function App() {

  const resData = restaurants


  return (
    
    <>
      <div className='w-full h-auto flex flex-col gap-5 p-5'>

        <Header/>
        <RestroContainer/>
      
      </div>
    </>
  )
  
}


export default App
