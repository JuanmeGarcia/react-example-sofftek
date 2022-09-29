import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DashboardContextProvider } from './context/useDashboardContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DashboardContextProvider>
      <App />
    </DashboardContextProvider>
  </React.StrictMode>
)
