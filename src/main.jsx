import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error.jsx'
import About from './components/About.jsx'
import RestroContainer from './components/RestroContainer.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import RestroMenu from './components/RestroMenu.jsx'

// Configuration
const appRouter = createBrowserRouter([

  {
    path: '/',
    element: (<App/>),
    children: [
      {
        path: '/',
        element: <RestroContainer/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/restaurent/:resId',
        element: <RestroMenu/>
      }
    ],
    errorElement: <Error/>
  },
  

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
