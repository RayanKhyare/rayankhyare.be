import './App.scss'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React, { useContext, useEffect, createContext, useState } from "react";
import Main from './components/Main/Main';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Project from './components/Project/Project';

function App() {

  return (
<Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<Project />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
