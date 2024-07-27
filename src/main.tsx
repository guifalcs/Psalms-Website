import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Galery from './views/Galery.tsx'
import Contact from './views/Contact.tsx'
import Merch from './views/Merch.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/contato',
    element: <Contact />
  },
  {
    path: '/loja',
    element: <Merch />
  },
  {
    path: '/galeria',
    element: <Galery />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
