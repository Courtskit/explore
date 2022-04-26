import axios from 'axios';
import apiHelpers from './apiHelpers';

const BASE_URL = "http://localhost:8000/explore/";
const RoadTripAPI = { };

RoadTripAPI.getAllRoadTrips = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}trip/`, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.createRoadTrip = async (roadTripData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}trip/`, roadTripData, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.updateRoadTripDestinations = async (roadTripData, destinationId) => {
  return await tryCatchFetch(() => axios.put(`${BASE_URL}trip-destination/${destinationId}/`, roadTripData, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.getTripById = async (tripId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}trip/${tripId}/`, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.deleteRoadTripById = async (roadTripId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}trip/${roadTripId}/`, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.getTripDestinationsById = async (tripId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}trip-destination/${tripId}/`, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.createRoadTripDestination = async (destinationData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}trip-destination/`, destinationData, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.deleteRoadTripDestinationById = async (destinationId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}trip-destination/${destinationId}/`, apiHelpers.getCsrfConfig()));
}

export default RoadTripAPI;