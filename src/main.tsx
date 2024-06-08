import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename={"/website/"}>
      <App />
    </Router>
  </React.StrictMode>,
)