import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Wishlist from './pages/Wishlist'
import Detailpages from './pages/Detailpages'
import Notfound from './pages/Notfound'
import Layout from './component/layout/Layout'
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
          path:"reservation",
          element:<Reservation/>
        },
        {
          path:"gallery",
          element:<Gallery/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"blog",
          element:<Blog/>
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
      path:"*",
      element:<Notfound/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
