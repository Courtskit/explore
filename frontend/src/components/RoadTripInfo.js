import { Link } from "react-router-dom"

function RoadTripInfo(props) {
  return (
    <div>
      <Link key={ props.roadtrip.id } to={`/trip/${props.roadtrip.id}`}>{ props.roadtrip.name }</Link>
      <button className="delete-button">X</button>
    </div>
  )
}

export default RoadTripInfo;