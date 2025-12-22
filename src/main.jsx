import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import RestroContainer from './components/RestroContainer.jsx'
import Error from './components/Error.jsx'
import About from './components/About.jsx'


const appRouter = createBrowserRouter([

  {
    path: '/',
    element: (
      <>
      <App/>
      </>
    )
    
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '*',
    element: <Error/>
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
