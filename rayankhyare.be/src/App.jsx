import './App.scss'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React, { useContext, useEffect, createContext, useState } from "react";
import Main from './components/Main/Main';
import About from './components/About/About';

function App() {

  return (
<Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
