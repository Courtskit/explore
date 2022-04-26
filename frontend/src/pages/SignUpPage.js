import { useNavigate } from "react-router-dom"
import RoadTripAPI from "../api/RoadTripsAPI"

function SignUpPage(props) {
  // router params
  const navigate = useNavigate()

  // event handlers
  const handleSignUp = async (evt) => {
    evt.preventDefault()

    let signupData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    }

    const data = await RoadTripAPI.signup(signupData)
    
    if (data) {
      navigate("/login")
    }
  }
  
  // render
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={ handleSignUp } method="POST">
        <label>Username: </label>
        <input type="text" name="username" placeholder="username" />
        <label>Password: </label>
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpPage;