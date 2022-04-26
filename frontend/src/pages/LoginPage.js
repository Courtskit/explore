import { useNavigate } from "react-router-dom"
import RoadTripAPI from "../api/RoadTripsAPI"

function LoginPage(props) {

  // router params
  const navigate = useNavigate()

  // event handlers
  const handleLogin = async (evt) => {
    evt.preventDefault()

    let loginData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    }

    const data = await RoadTripAPI.login(loginData)
    
    if (data) {
      props.setUsername(data.username)
      navigate("/")
    }
  }
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={ handleLogin } method="POST">
        <label>Username: </label>
        <input type="text" name="username" placeholder="username" />
        <label>Password: </label>
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage;