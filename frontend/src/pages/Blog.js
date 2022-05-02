import { useNavigate } from "react-router-dom";

function Blog(props) {
  const navigate = useNavigate();

  return (
    <div>
      <button className="homeButton" onClick={() => navigate('/')}>Home</button>
      <h2 className="header">Blog</h2>
      <div className="article">
        <h3 className="blogheader">3 best hikes in Mount Rainier National Park</h3>
        <h4>Skyline Trail Loop</h4>
        <p>Discover this 6.2-mile loop trail near Paradise Inn, Washington. Generally considered a challenging route, it takes an average of 3 h 17 min to complete. This is a very popular area for backpacking and hiking, so you'll likely encounter other people while exploring.</p>
        <h4>Tolmie Peak Trail</h4>
        <p>Experience this 5.6-mile out-and-back trail near Carbonado, Washington. Generally considered a moderately challenging route, it takes an average of 2 h 55 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. </p>
        <h4>Freemont Lookout Trail</h4>
        <p>Get to know this 5.7-mile out-and-back trail near Longmire, Washington. Generally considered a moderately challenging route, it takes an average of 2 h 41 min to complete. This is a very popular area for hiking and trail running, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October.</p>
      </div>
      <h3 className="blogheader">Helpful Resources</h3>
      <div className="resources">
        <a className="links" href="https://www.alltrails.com/">AllTrails</a>
        <a className="links" href="https://www.ioverlander.com/">iOverlander</a>
        <a className="links" href="https://www.nps.gov/index.htm">National Park Service</a>
        <a className="links" href="https://www.rei.com/">REI CO-OP</a>
      </div>
      <hr></hr>
      <h3 className="blogheader">New Features Coming Soon !</h3>
      <hr></hr>
    </div>
  )
}

export default Blog;