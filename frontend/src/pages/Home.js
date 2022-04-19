import { Link } from "react-router-dom";
import bear from '../bear.svg'
import '../home.css';

function Home(props) {
  return (
    <div className="homeContainer">
      <nav className="navContainer">
        <div className="navbar">
          <div className="navitem">Welcome User</div>
        </div>
      </nav>
    
      <div className="mainContainer">
        <div className="innerContainer">
          <div className="menu-column">
            <Link className="row" to="/parks"><h1>MAP</h1></Link>
            <Link className="row" to="/parks"><h1>PARKS</h1></Link>
          </div>

          <div className="image-column">
            <Link className="row" to="/"><img src={bear} className="logo" alt="logo" />
            </Link>
          </div>

          <div className="menu-column">
            <Link className="row" to="/build"><h1>PLAN</h1></Link>
            <Link className="row" to="/parks"><h1>BLOG</h1></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;