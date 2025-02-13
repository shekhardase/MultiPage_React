import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'


function App() {

  const router = createBrowserRouter([
    {
      path: 'home',
      element: <><Navbar /> <Home /></>
    },
    {
      path: 'about',
      element: <>    <Navbar /> <About />
      </>

    },
    {
      path: 'contact',
      element:
        <> <Navbar /> <Contact /> </>
    },
  ])

  return (

    <RouterProvider router={router} />
  
  )
}

export default App

