import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CSE from './CSE.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CSE />
  </StrictMode>,
)
