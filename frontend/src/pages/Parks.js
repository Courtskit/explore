import { useNavigate } from "react-router-dom";

function Parks(props) {
  const navigate = useNavigate();

  return (
    <div>
      <button className="homeButton" onClick={() => navigate('/')}>Home</button>
      <h2 className="header">Parks</h2>
    </div>
  )
}

export default Parks;