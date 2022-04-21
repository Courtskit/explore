import { useEffect, useState } from "react";
import RoadTripAPI from "../api/RoadTripsAPI";
import { useParams, useNavigate } from "react-router-dom";
import AddDestination from "../components/AddDestination";


function Trip(props) {
  const [trip, setTrip] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadRoadTrips()
  }, [params.id])

  const loadRoadTrips = async () => {
    // console.log(params.id)
    let data = await RoadTripAPI.getTripById(params.id)
    // console.log('DATA', data)////
    setTrip(data)
  }

  useEffect(() => {
    loadRoadTripDestinations()
  }, [trip])

  const loadRoadTripDestinations = async () => {
    if (!trip) {
      setTrip(null)
      return 
    }
    let newDestinations = []
    console.log("TRIPPPPPPPP", trip)
    console.log("TRIPPPPPPPPDESTINATIONS", trip.destinations)

    for(const destinationId of trip.destinations) {
      console.log('TRIP ID ', destinationId)
      newDestinations.push(await RoadTripAPI.getTripDestinationsById(destinationId))
      // console.log("TRIPPPPPPPPDESTINATION ****** JUST ONE", newDestinations)
    }
    setDestinations(newDestinations);
    console.log('newwwwwwwwDestinations', newDestinations)////
  }

  const renderDestinations = () => {
    if (destinations.length == 0 || !destinations) {
      return 
    }
    return destinations.map((destination, index) => {
      return renderDestination(destination, index) 
    })
  }

  const renderDestination = (destination, index) => {
    return (
      <div key={ index }>
        <h2>{ destination.name }</h2>
        <h3>{ destination.description }</h3>
        <p>{ destination.date }</p>
      </div>
    )
  }

  return (
    <div>
      <h3>Trip Details</h3>
      { renderDestinations() }
      <button onClick={() => navigate('/trip')}>Back</button>
      <AddDestination />
    </div>
  )
}

export default Trip;