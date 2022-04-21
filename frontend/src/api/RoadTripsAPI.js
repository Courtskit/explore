import axios from 'axios';

const BASE_URL = "http://localhost:8000/explore/";

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    console.log("RESPONSE:", response);
    console.log("RESPONSE DATA:", response.data);
    return response.data ? response.data : {message:"success"};
  }
  catch (e) {
    console.error("tryCatchFetch ERROR:", e.response ? e.response.data : e);
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

RoadTripAPI.deleteRoadTripById = async (roadTripId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}trip/${roadTripId}/`));
}

RoadTripAPI.getTripDestinationsById = async (tripId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}trip/${tripId}/`))
}


export default RoadTripAPI;