import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home';
import Parks from './pages/Parks';
import Build from './pages/Build';
import Trip from './pages/Trip';
import Map from './pages/Map';
import Blog from './pages/Blog';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';


function App() {
  const [username, setUsername] = useState("");

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home username={ username } setUsername={setUsername} />}/>
          <Route path="/login" element={<LoginPage setUsername={setUsername}/>}/>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path="/trip" element={<Build username={ username }/>}/>
          <Route path="/trip/:id" element={<Trip />}/>
          <Route path="/parks" element={<Parks />}/>
          <Route path="/map" element={<Map />}/>
          <Route path="/blog" element={<Blog />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
