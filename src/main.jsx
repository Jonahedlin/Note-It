/**
@FileName main.jsx
@Description This file is the entry point for the Note-It extension's React application.
@Author Jonah Ssembatya
@CreationDate 02-15-2026 (MM-DD-YYYY)
@LastModified 05-08-2026 (MM-DD-YYYY)
@Version 1.0.2
@ProjectName Note-It-Down!! (Note-It)
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
