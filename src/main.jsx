/**
 * Main Entry Point
 * 
 * TEMPLATE GUIDE:
 * Dies ist der Einstiegspunkt der React-Anwendung.
 * Hier werden die globalen Styles importiert.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
