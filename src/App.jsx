import './App.css'
import Header from './components/Header'
import { restaurants } from './utils/RestoarentData'
import { Outlet } from 'react-router-dom'
import { Provider } from "react-redux"
import appStore from './utils/appStore'


function App() {

  const resData = restaurants


  return (
    
    <>
      <Provider store={appStore} >
        <div className='w-full h-auto flex flex-col gap-5 p-5'>
          <Header />
          <Outlet/>
        </div>
      </Provider>
    </>
  )
  
}


export default App
