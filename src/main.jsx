import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import Menuinicial from './Components/Menuinicial.jsx'
import Error from './Components/Error.jsx'
import './index.css'
import Personaje from './Components/Personaje.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Footer from './Components/Footer.jsx'


const router= createBrowserRouter([
  {
    path:"/",
    element:<Menuinicial />,
    errorElement: <Error />
  },
  {
    path:"/buscador",
    element:<App modo={"buscador"}/>,
  },
  {
    path:"/paginado",
    element:<App modo={"paginado"}/>,
  },  
  {
    path:"/todojunto",
    element:<App modo={"todojunto"}/>,
  },
  {
    path:"/personaje",
    element:<App modo={"personaje"}/>,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Footer />
  </React.StrictMode>,
)
