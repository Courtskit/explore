import { useEffect, useState } from "react";
import RoadTripAPI from "../api/RoadTripsAPI";
import AddRoadTrip from "../components/AddRoadTrip";
import RoadTripInfo from "../components/RoadTripInfo";
import { useNavigate } from "react-router-dom";
import '../App.css';


function Build(props) {
  const [roadTripList, setRoadTripList] = useState([])
  const [isPending, setIsPending] = useState(true); 
  const navigate = useNavigate();

  // render new trip form 
  useEffect(() => {
    loadRoadTrips()
  }, [])

  // gets ALL TRIPS from API, sets roadTripList state 
  const loadRoadTrips = async () => {
    const data = await RoadTripAPI.getAllRoadTrips()
    setRoadTripList(data ? data : [])
    setIsPending(false); 
  }

  // filters through ALL TRIPS and removes road trip by it's id
  const removeRoadTrip = (deletedRoadTripId) => {
    const updatedRoadTrips = roadTripList.filter((roadtrip) => {
      return roadtrip.id !== deletedRoadTripId
    })
    setRoadTripList(updatedRoadTrips);
  }

  // render ALL TRIPS
  const renderRoadTrips = () => {
    return roadTripList.map((roadtrip, index) => {
      return <RoadTripInfo key={ index } roadtrip={ roadtrip } removeRoadTrip={ removeRoadTrip }/>
    })
  }

  return (
    <div>
      <button className="homeButton" onClick={() => navigate('/')}>Home</button>
      <h3 className="header">Trips:</h3>
      { isPending && <h2>Loading...</h2> } 
      { renderRoadTrips() }
      <AddRoadTrip />
    </div>
  )
}

export default Build;