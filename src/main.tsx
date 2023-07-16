

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'react-bootstrap'
import LoginProvider from "./context/contextLogin.jsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </LoginProvider>
  </React.StrictMode>,
)
