import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GetDataProvider } from './contextAPI/GetDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<GetDataProvider>
<App />
</GetDataProvider>
)
