import RoadTripAPI from "../api/RoadTripsAPI";
import { useParams } from "react-router-dom";

// // props are destinations and setDestinations
function AddDestination(props) {
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

    // console.log("SENDING DESTINATION DATA:", roadTripDestination)

    const data = await RoadTripAPI.createRoadTripDestination(roadTripDestination);

    if (data) {
      let allDestinations = [...props.destinations, data]
      props.setDestinations(allDestinations)
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