import RoadTripAPI from "../api/RoadTripsAPI";
import { useNavigate } from "react-router-dom";

function AddRoadTrip(props) {

  const navigate = useNavigate();

  const handleCreateRoadTrip = async (evt) => {
    evt.preventDefault();

    const roadTripData = {
      name: evt.target.elements["name"].value,
      description: evt.target.elements["description"].value
    }

    console.log("SENDING ROAD TRIP DATA:", roadTripData)

    const data = await RoadTripAPI.createRoadTrip(roadTripData);

    if (data) {
      console.log("RECEIVED DATA:", data)
      navigate(`/trip/${data.id}`)
    }

  }

  return (
    <div>
      <form onSubmit={ handleCreateRoadTrip } method="POST">
        <label>New Road Trip:</label>
        <input name="name" placeholder="name"/>
        <input name="description" placeholder="description" />
        <button type="submit">Create a Road Trip!</button>
      </form>
    </div>
  )
}

export default AddRoadTrip;