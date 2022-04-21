import { useEffect, useState } from "react";
import RoadTripAPI from "../api/RoadTripsAPI";
import { useParams } from "react-router-dom";

function Trip(props) {
  const [trip, setTrip] = useState(null)
  const [destinations, setDestinations] = useState([])

  const params = useParams()

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
    for(const tripId in trip.destinations) {
      newDestinations.push(await RoadTripAPI.getTripDestinationsById(tripId))
    }
    setDestinations(destinations);
  }

  const renderDestinations = () => {
    return destinations.map((destination, index) => {
      return <p key={ index }>{ destination.name }</p>
    })
  }

  return (
    <div>
      { renderDestinations() }
    </div>
  )
}

export default Trip;