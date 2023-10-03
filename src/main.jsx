import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Authcontext from './provider/Authcontext/Authcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authcontext>
    <App />
    </Authcontext>
  </React.StrictMode>,
)
