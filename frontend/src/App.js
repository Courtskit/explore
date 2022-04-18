import './App.css';
import './home.css'
import bear from './bear.svg'
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home';
import Parks from './pages/Parks';
import Build from './pages/Build';

function App() {
  return (
    <HashRouter>
      <div className="App">

        <nav className="navContainer">
          <ul className="navbar">
              <li>Welcome User</li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/build" element={<Build />}/>
          <Route path="/parks" element={<Parks />}/>
        </Routes>


      </div>
    </HashRouter>
  );
}

export default App;
