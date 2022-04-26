import { Link, useNavigate } from "react-router-dom";
import RoadTripAPI from "../api/RoadTripsAPI";
import bear from '../bear.svg'
import '../home.css';

function Home(props) {

  const navigate = useNavigate()

  const doLogout = async () => {
    const data = await RoadTripAPI.logout()
    if (data) {
      props.setUsername("")
      navigate("/")
    }
  }

  const renderAuthItems = () => {
    if (props.username === "") {
      return (
        <>
          <link rel="icon" type="image/svg+xml" href="../bear.svg" sizes="any"></link>
          <Link className="navitem" to="/login">Login</Link>
          <Link className="navitem" to="/signup">Sign Up</Link>
        </>
      )
    }

    return (
      <>
        <Link className="navitem" to="#" onClick={ doLogout }>Logout</Link>
      </>
    )
  }


  return (
    <div className="homeContainer">
      <nav className="navContainer">
        <div className="navbar">
          { renderAuthItems() }
        </div>
      </nav>
      <div className="mainContainer">
        <div className="innerContainer">
          <div className="menu-column">
            <Link className="row navigateMain" to="/map"><h1>MAP</h1></Link>
            <Link className="row navigateMain" to="/parks"><h1>PARKS</h1></Link>
          </div>
          <div className="image-column">
            <Link className="row" to="/"><img src={bear} className="logo" alt="logo" />
            </Link>
          </div>
          <div className="menu-column">
            <Link className="row navigateMain" to="/trip"><h1>PLAN</h1></Link>
            <Link className="row navigateMain" to="/blog"><h1>BLOG</h1></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;