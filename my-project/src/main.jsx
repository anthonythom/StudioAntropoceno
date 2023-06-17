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
import TrabalhosT from './pages/Trabalhos/Trabalhos3.jsx'
import Trabalhos2 from './pages/Trabalhos/Trabalhos2.jsx'
import Trabalhos1 from './pages/Trabalhos/Trabalhos1.jsx'
import Trabalhos3 from './pages/Trabalhos/Trabalhos3.jsx'

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

      // rotas da pagina de trabalhos
       {
      path: '/trabalhos',
      element: <Trabalhos />
      }
      ,
       {
      path: '/trabalhos1',
      element: <Trabalhos1 />
      }
      ,
       {
      path: '/trabalhos2',
      element: <Trabalhos2 />
      }
      ,
       {
      path: '/trabalhos3',
      element: <Trabalhos3 />
      }
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)


