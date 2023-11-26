import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
// import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async';
import { AuthContextProvider } from './context/AuthContext.jsx'
// import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

// Create a tanstack query client
// const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <AuthContextProvider>
      <HelmetProvider>
        {/* <QueryClientProvider client={queryClient}> */}
        <RouterProvider router={router} />
        {/* </QueryClientProvider> */}
        <Toaster />
      </HelmetProvider>
    </AuthContextProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>,
)
