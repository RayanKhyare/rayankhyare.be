import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Header />
    <main>
      <App />
    </main>
    <Footer />
  </>,
)
