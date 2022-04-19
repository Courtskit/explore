import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoadTripAPI from "../api/RoadTripsAPI";
import AddRoadTrip from "../components/AddRoadTrip"
import RoadTripInfo from "../components/RoadTripInfo";

function Build(props) {
  const [roadTripList, setRoadTripList] = useState([])

  // render new trip form 
  useEffect(() => {
    loadRoadTrips()
  }, [])

  const loadRoadTrips = async () => {
    const data = await RoadTripAPI.getAllRoadTrips()
    setRoadTripList(data ? data : [])
  }

  const removeRoadTrip = (deletedRoadTripId) => {
    const updatedRoadTrips = roadTripList.filter((roadtrip, index) => {
      return roadtrip.id !== deletedRoadTripId
    })
    setRoadTripList(updatedRoadTrips);
  }

  // render all trips
  const renderRoadTrips = () => {
    return roadTripList.map((roadtrip, index) => {
      return <RoadTripInfo roadtrip={ roadtrip } removeRoadTrip={ removeRoadTrip }/>
    })
  }

  return (
    <div>
      <h2>build</h2>
      <h3>New Trip</h3>
      <AddRoadTrip />

      <h3>Trips:</h3>
      { renderRoadTrips() }

    </div>
  )
}

export default Build;