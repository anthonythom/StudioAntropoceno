import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Children } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Contato from './pages/Contato/Contato.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import Trabalhos from './pages/Trabalhos/Trabalhos.jsx'
import Errorpage from './pages/Errorpage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <Home />
        },
        {
      path: '/sobre',
      element: <Sobre/>
      }, 
      {
      path: '/contato',
      element: <Contato/>
      },
       {
      path: '/trabalhos',
      element: <Trabalhos/>
      }
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)


