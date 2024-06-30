import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaskContextProvider from './context/TaskContextProvider.jsx'
import SearchContextProvider from './context/SearchContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </TaskContextProvider>
  </React.StrictMode>,
)
