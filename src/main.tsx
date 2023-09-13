import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './components/Layout'
import {Home} from "./pages/Home"
import {AddUser} from "./pages/AddUser"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About } from './pages/About'

const router=createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/add-user",element:<AddUser/>}
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
