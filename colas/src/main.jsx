import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ATM from './ATM.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ATM />
  </StrictMode>,
)
