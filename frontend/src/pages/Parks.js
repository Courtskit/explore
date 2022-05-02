import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import ParkInfo from "../components/ParkInfo";

function Parks(props) {
  const [isPending, setIsPending] = useState(true); 
  const navigate = useNavigate();

  return (
    <div>
      <button className="homeButton" onClick={() => navigate('/')}>Home</button>
      <h2 className="header">Parks</h2>
      <ParkInfo setIsPending={ setIsPending } isPending={ isPending }/>
    </div>
  )
}

export default Parks;

// IMPLEMENT SEARCH PARK FEATURE
  // const [searchTerm, setSearchTerm] = useState('');

  // const getParkCodes = () => {
  //   ParkCodes.filter((val) => {
  //     if (searchTerm == "" || val.park_name.toLowerCase().includes(searchTerm.toLowerCase())) {
  //       return val
  //     }
  //   }).map((val, key) => {
  //     return (
  //       <input name={val.park_name} value={val.park_name} />
  //     )
  //   })
  // }
  // eslint-disable-next-line
  {/* <h2 className="header">Parks</h2> */}
  // eslint-disable-next-line
  {/* <input type="text" placeholder="search parks" onChange={e => { setSearchTerm(e.target.value) }} /> */}