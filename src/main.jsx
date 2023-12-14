import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navigator from './Navigator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <h1 className="font-bold text-4xl p-4 border-b-4 border-gray-800">Lista de albuns</h1>
    <Navigator/>
  </>
)
