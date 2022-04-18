import './App.css';
import bear from './bear.svg'
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home';
import Parks from './pages/Parks';
import Build from './pages/Build';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={bear} className="App-logo" alt="logo" />
      </header> */}
      <HashRouter>
        <Link to="/build"><h1>Build</h1></Link>
        <Link to="/parks"><h1>Parks</h1></Link>
        <Link to="/"><img src={bear} className="App-logo" alt="logo" /></Link>
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/build" element={<Build />}/>
          <Route path="/parks" element={<Parks />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
