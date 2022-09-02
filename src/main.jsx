import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './global.css'
import { store } from './store/store'
import { UagApp } from './UagApp'
import { Provider } from 'react-redux' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <UagApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
