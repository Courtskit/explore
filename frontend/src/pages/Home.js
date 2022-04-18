import { Link } from "react-router-dom";
import bear from '../bear.svg'

import '../home.css';

function Home(props) {
  return (
    <div className="main">

      <div className="gridContainer">
        <div className="column">
          <Link className="row" to="/build"><h1>BUILD</h1></Link>

          <Link className="row" to="/parks"><h1>PARKS</h1></Link>
        </div>

        <div>
          <Link to="/"><img src={bear} className="logo" alt="logo" /></Link>
        </div>

        <div className="column">
          <Link className="row" to="/parks"><h1>MAP</h1></Link>

          <Link className="row" to="/parks"><h1>BLOG</h1></Link>
        </div>
      </div>

    </div>
  )
}

export default Home;