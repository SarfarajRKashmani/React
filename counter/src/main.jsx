import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter Value="0" No="1"/>
    <Counter Value="10" No="2"/>
    <Counter Value="20" No="3"/>
    <Counter Value="30" No="4"/>
  </StrictMode>,
)
