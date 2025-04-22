import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import {RouterProvider } from 'react-router'
import router from './Router/Router'
import { Toaster } from 'react-hot-toast'




createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}></RouterProvider>
<Toaster position='top-right'></Toaster>
  </StrictMode>,
)
