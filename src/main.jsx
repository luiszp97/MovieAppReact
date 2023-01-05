import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { AppTheme } from './theme/AppTheme'
import { Footer } from './ui/components/Footer'
import { Navbar } from './ui/components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AppTheme>
        <AppRoutes />    
    </AppTheme>
  </BrowserRouter>
  // </React.StrictMode>,
)
