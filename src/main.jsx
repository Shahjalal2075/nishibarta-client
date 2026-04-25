import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Routes from './Routes/Routes'
import AuthProvider from './Providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
)