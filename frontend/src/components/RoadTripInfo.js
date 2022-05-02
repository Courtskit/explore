import { Link } from "react-router-dom"
import RoadTripAPI from "../api/RoadTripsAPI"

function RoadTripInfo(props) {
  // gets tripId in database if it exists, takes tripId and uses removeRoadTrip 
  const handleDeleteTrip = async () => {
    const data = await RoadTripAPI.deleteRoadTripById(props.roadtrip.id)
    if (data) {
      props.removeRoadTrip(props.roadtrip.id)
    }
    else {
      console.error("ERROR")
    }
  }

  return (
    <div className="tripsOnTrip">
      <Link className="tripNameOnTripsPage" key={ props.roadtrip.id } to={`/trip/${props.roadtrip.id}`}>{ props.roadtrip.name }</Link>
      <button className="delete-button" onClick={ handleDeleteTrip }>X</button>
    </div>
  )
}

export default RoadTripInfo;