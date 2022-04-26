import { useState, useEffect } from 'react';
import axios from "axios";

function ParkInfo(props) {
  const [park, setPark] = useState(null);
  const parkUrl = `https://developer.nps.gov/api/v1/parks?limit=600&api_key=${process.env.REACT_APP_NParks}`;

  useEffect(() => {
    loadParks()
  }, [])

  const loadParks = async () => {
    axios.get(parkUrl).then(res => setPark(res.data.data));
    props.setIsPending(false); 
    console.log(park)
  }

  const renderDestinations = () => {
    return (
      <div className="parkInfoPage">
        {park && park.map((info, index) => {
          return (
            <ul className='parkInfo' key={index}>
              <li className="parkHeader">{info.fullName}</li>
              <li>{info.description}</li>
            </ul>
          )
        })}
      </div>
    )
  }

  return (
    <div className="tripsOnTrip">
      <div>
        { renderDestinations() }
      </div>
    </div>
  )
}

export default ParkInfo;


// IMPLEMENT CAMPGROUNDS INFO
  // const [camps, setCamps] = useState("");
  // useEffect(() => {
  //   loadCamps()
  // }, [camps])
  // const loadCamps = async () => {
  //   let campgroundUrl = `https://developer.nps.gov/api/v1/campgrounds?parkCode=glacier&api_key=${process.env.REACT_APP_NParks}`;
  //   let data = await 
  //   setCamps(parkUrl)
  // }



// IMPLEMENT SEARCH FEATURE AND THEN DISPLAY IMAGE FOR EACH PARK
  //   <div>
  //   {park && park.map((info, index) => {
  //     return (
  //       <ul key={index}>
  //         <li>{info.fullName}</li>
  //         <li>{info.description}</li>
  //         {info.images.map((img, index) => <img key={index} src={img.url} width="100" />)} 
  //       </ul>
  //     )
  //   })}
  // </div>