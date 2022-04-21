import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
// import { HashRouter, Routes, Route, Link } from "react-router-dom";
// import { useState } from 'react';
import Home from './pages/Home';
import Parks from './pages/Parks';
import Build from './pages/Build';
import Trip from './pages/Trip';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/trip" element={<Build />}/>
          <Route path="/trip/:id" element={<Trip />}/>
          <Route path="/parks" element={<Parks />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
