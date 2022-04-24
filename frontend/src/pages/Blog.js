import { useNavigate } from "react-router-dom";

function Blog(props) {
  const navigate = useNavigate();

  return (
    <div>
      <button className="homeButton" onClick={() => navigate('/')}>Home</button>
      <h2 className="header">Blog</h2>
    </div>
  )
}

export default Blog;