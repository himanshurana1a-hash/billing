import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './Home.jsx'
import Features from './components/Features.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <App />


    </BrowserRouter>
 
)
