import { useEffect, useState } from "react";
import RoadTripAPI from "../api/RoadTripsAPI";
import AddRoadTrip from "../components/AddRoadTrip";
import RoadTripInfo from "../components/RoadTripInfo";

function Build(props) {
  const [roadTripList, setRoadTripList] = useState([])
  const [isPending, setIsPending] = useState(true); 

  // render new trip form 
  useEffect(() => {
    loadRoadTrips()
  }, [])

  const loadRoadTrips = async () => {
    const data = await RoadTripAPI.getAllRoadTrips()
    setRoadTripList(data ? data : [])
    setIsPending(false); 
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
      return <RoadTripInfo key={ index } roadtrip={ roadtrip } removeRoadTrip={ removeRoadTrip }/>
    })
  }

  return (
    <div>
      <h2>build</h2>
      <h3>New Trip</h3>
      <AddRoadTrip />

      <h3>Trips:</h3>
      { isPending && <h2>Loading...</h2> } 
      { renderRoadTrips() }
    </div>
  )
}

export default Build;