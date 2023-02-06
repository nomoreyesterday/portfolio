import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'

// import './global.css'
import './index.css'
import Homepage from './page/Homepage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)
