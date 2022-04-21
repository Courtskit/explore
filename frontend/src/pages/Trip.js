import { useEffect, useState } from "react";
import RoadTripAPI from "../api/RoadTripsAPI";
import { useParams, useNavigate } from "react-router-dom";

function Trip(props) {
  const [trip, setTrip] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadRoadTrips()
  }, [params.id])

  const loadRoadTrips = async () => {
    let data = await RoadTripAPI.getTripDestinationsById(params.id)
    setTrip(data)
  }

  useEffect(() => {
    loadRoadTripDestinations()
  }, [trip])

  const loadRoadTripDestinations = async () => {
    if (!trip)
      setTrip([])
    let newDestinations = []
    for(const tripId of trip.destinations) {
      newDestinations.push(await RoadTripAPI.getTripDestinationsById(tripId))
    }
    setDestinations(destinations);
  }

  const renderDestinations = () => {
    return destinations.map((destination, index) => {
      console.log('DESTINATIONNNNNN', destination)
      return <p key={ index }>{ destination.name }</p>
    })
  }

  return (
    <div>
      <h3>Trip Details</h3>
      { renderDestinations() }
      <button onClick={() => navigate('/trip')}>Back</button>
    </div>
  )
}

export default Trip;