import RoadTripAPI from "../api/RoadTripsAPI";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function AddDestination(props) {
  const navigate = useNavigate();
  const { id } = useParams()
  // console.log(id)

  const handleCreateDestination = async (evt) => {
    evt.preventDefault();

    const roadTripDestination = {
      name: evt.target.elements["name"].value,
      description: evt.target.elements["description"].value,
      trip: parseInt(id),
      date: evt.target.elements["date"].value
    }

    console.log("SENDING DESTINATION DATA:", roadTripDestination)

    const data = await RoadTripAPI.createRoadTripDestination(roadTripDestination);

    if (data) {
      console.log("RECEIVED DATA:", data)
      navigate(`/trip/${id}`)
    }
  }

  return (
    <div>
      <form onSubmit={ handleCreateDestination } method="POST">
        <label>Next Stop:</label>
        <input name="name" placeholder="name"/>
        <input name="description" placeholder="description" />
        <input name="date" placeholder="date" />
        <button type="submit">Add Destination!</button>
      </form>
    </div>
  )
}

export default AddDestination;
