import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import RoadTripAPI from "../api/RoadTripsAPI";
import AddDestination from "../components/AddDestination";
import DestinationDetail from "../components/DestinationDetail";

function Trip(props) {
  const [trip, setTrip] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  // loads all trip when a trip id is updated
  useEffect(() => {
    loadRoadTrips()
  }, [params.id])

  const loadRoadTrips = async () => {
    let data = await RoadTripAPI.getTripById(params.id)
    setTrip(data)
  }

  // loads all road trip destinations when a trip is changed 
  useEffect(() => {
    loadRoadTripDestinations()
  }, [trip])

  const loadRoadTripDestinations = async () => {
    if (!trip) {
      setTrip(null)
      return 
    }
    let newDestinations = []
    for(const destinationId of trip.destinations) {
      newDestinations.push(await RoadTripAPI.getTripDestinationsById(destinationId))
    }
    setDestinations(newDestinations);
  }

  // filters through ALL DESTINATIONS and removes one by its ID
  const removeDestination = (deleteDestinationId) => {
    const updatedDestinations = destinations.filter((destination) => {
      return destination.id !== deleteDestinationId
    })
    setDestinations(updatedDestinations);
  }

  // maps through ALL DESTINATIONS, sending each destination info to DestinationDetail 
  const renderDestinations = () => {
    if (destinations.length === 0 || !destinations) {
      return 
    }
    return destinations.map((destination) => {
      return <DestinationDetail key={destination.id} destination={destination} removeDestination={ removeDestination } destinations={ destinations } setDestinations={ setDestinations }/>
    })
  }
  
  return (
    <div>
      <button className="homeButton" onClick={() => navigate('/')}>Home</button>
      <div className="destinationsPage">
        <h2 className="header">Trip Details</h2>
        { renderDestinations() }
        <AddDestination destinations={ destinations } setDestinations={ setDestinations } />
        <button onClick={() => navigate('/trip')}>Back</button>
      </div>
    </div>
  )
}

export default Trip;