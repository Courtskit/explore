import axios from 'axios';

const BASE_URL = "http://localhost:8000/explore/";

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    console.log("RESPONSE:", response);
    console.log("RESPONSE DATA:", response.data);
    return response.data;
  }
  catch (e) {
    console.error("tryCatchFetch ERROR:", e);
    return null;
  }
}

const RoadTripAPI = { };

RoadTripAPI.getAllRoadTrips = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}trip/`));
}


RoadTripAPI.createRoadTrip = async (roadTripData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}trip/`, roadTripData));
}



export default RoadTripAPI;