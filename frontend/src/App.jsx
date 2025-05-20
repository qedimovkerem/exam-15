import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './component/layout/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Specialties from './pages/Specialties'
import Reservation from './pages/Reservation'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Wishlist from './pages/wishlist'
import Detailpages from './pages/Detailpages'
import Notfound from './pages/Notfound'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
         {
          path:"menu",
          element:<Menu/>
        },
         {
          path:"special",
          element:<Specialties/>
        },
         {
          path:"reservation",
          element:<Reservation/>
        },
         {
          path:"blog",
          element:<Blog/>
        },
         {
          path:"about",
          element:<About/>
        },
         {
          path:"contact",
          element:<Contact/>
        },
         {
          path:"admin",
          element:<Admin/>
        },
         {
          path:"basket",
          element:<Basket/>
        },
         {
          path:"wishlist",
          element:<Wishlist/>
        },
         {
          path:"detailpages/:_id",
          element:<Detailpages/>
        },
      ]
    },
    {
      path:'*',
      element:<Notfound/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
