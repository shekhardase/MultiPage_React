import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/home" />, // Redirects to Home page
    },
    {
      path: 'home',
      element: <>
        <Navbar /> 
        <Home />
      </>
    },
    {
      path: 'about',
      element: <>
        <Navbar /> 
        <About />
      </>
    },
    {
      path: 'contact',
      element: <>
        <Navbar /> 
        <Contact />
      </>
    },
    {
      path: '*', // Handles unknown routes (404)
      element: <h1 className="text-center mt-10 text-3xl text-red-500">404 Not Found</h1>,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
