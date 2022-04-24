import { useState } from "react";
import DestinationForm from "../components/DestinationForm"
import RoadTripAPI from "../api/RoadTripsAPI";


{/* <DestinationDetail key={destination.id} destination={destination} removeDestination={ removeDestination } destinations={ destinations } setDestinations={ setDestinations }/> */}

function DestinationDetail(props) {
  const [showForm, setShowForm] = useState(false);

    const handleDeleteDestination = async () => {
        const data = await RoadTripAPI.deleteRoadTripDestinationById(props.destination.id)
        if (data) {
            props.removeDestination(props.destination.id)
        }
        else {
            console.error("ERROR")
        }
    }

    const handleUpdateDestination = async () => {
      setShowForm(!showForm)
    }

    const renderUpdateForm = () => {
      // console.log('here is update form destination', props.destination)
      return <DestinationForm destination={ props.destination }/>
    }

    // render
    const renderDestination = () => {
        return (
          <div className="destinations" key={ props.destination.id }>
            <h2>{ props.destination.name }</h2>
            <h3>{ props.destination.description }</h3>
            <p>{ props.destination.date }</p>
            <button className="delete-button" onClick={ handleDeleteDestination }>X</button>
            <button className="update-button" onClick={ handleUpdateDestination }>+</button>
          </div>
        )
      }
    
    return (
        <div>
          { renderDestination() }
          { showForm && renderUpdateForm() }
        </div>
    )
}

export default DestinationDetail