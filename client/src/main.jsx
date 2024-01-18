import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { WishlistProvider } from './context/WishlistContex.jsx'
import { BasketProvider } from './context/BasketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
      <BasketProvider>
        <App />

      </BasketProvider>

    </WishlistProvider>
  </React.StrictMode>,
)
