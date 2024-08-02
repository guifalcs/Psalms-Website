import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
