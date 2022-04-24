import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
// import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Parks from './pages/Parks';
import Build from './pages/Build';
import Trip from './pages/Trip';
import Map from './pages/Map';
import Blog from './pages/Blog';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/trip" element={<Build />}/>
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
