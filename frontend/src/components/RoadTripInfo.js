import { Link } from "react-router-dom"
import RoadTripAPI from "../api/RoadTripsAPI"

function RoadTripInfo(props) {

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
    <div>
      <Link key={ props.roadtrip.id } to={`/trip/${props.roadtrip.id}`}>{ props.roadtrip.name }</Link>
      <button className="delete-button" onClick={handleDeleteTrip}>X</button>
    </div>
  )
}

export default RoadTripInfo;