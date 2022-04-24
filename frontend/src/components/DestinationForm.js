import RoadTripAPI from "../api/RoadTripsAPI"
import { useNavigate } from "react-router-dom"

function DestinationForm(props) {
  const navigate = useNavigate()

  const renderForm = (handleForm) => {
    return (
      <div>
        <form onSubmit={ handleForm } method="POST">
          <label>Update Trip:</label>
          <input name="name" placeholder={ props.destination.name }/>
          <input name="description" placeholder={ props.destination.description } />
          <input name="date" placeholder={ props.destination.date } />
          <button type="submit">Update Trip!</button>
        </form>
      </div>
    )
  }

  if(props.destination){
    const handleUpdateDestination = async (evt) => {
      evt.preventDefault()
        const updatedDestinationData = {
          id: props.destination.id,
          name: evt.target.elements["name"].value,
          description: evt.target.elements["description"].value, 
          trip: props.destination.trip,
          date: evt.target.elements["date"].value
        }
        const data = RoadTripAPI.updateRoadTripDestinations(updatedDestinationData, props.destination.id);

        if (data) {
          navigate(`/trip/`) //  AFTER UPDATE, IT TAKES PAGE TO TRIP PAGE *fix when there's time*
          // navigate(`/trip/${props.destination.trip}`) 
        }
      }
    return (
      <div>
        { renderForm(handleUpdateDestination) }
      </div>
    )
  }
}

export default DestinationForm;