import axios from 'axios';
import apiHelpers from './apiHelpers';

const RoadTripAPI = { };
const BASE_URL = "http://localhost:8000/explore/";

RoadTripAPI.signup = async (signupData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}users/`, signupData, apiHelpers.getCsrfConfig()))
}

RoadTripAPI.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}login/`, loginData, apiHelpers.getCsrfConfig()))
}

RoadTripAPI.logout = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}logout/`, null, apiHelpers.getCsrfConfig()))
}

RoadTripAPI.getAllRoadTrips = async () => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}trip/`, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.createRoadTrip = async (roadTripData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}trip/`, roadTripData, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.updateRoadTripDestinations = async (roadTripData, destinationId) => {
  return await apiHelpers.tryCatchFetch(() => axios.put(`${BASE_URL}trip-destination/${destinationId}/`, roadTripData, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.getTripById = async (tripId) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}trip/${tripId}/`, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.deleteRoadTripById = async (roadTripId) => {
  return await apiHelpers.tryCatchFetch(() => axios.delete(`${BASE_URL}trip/${roadTripId}/`, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.getTripDestinationsById = async (tripId) => {
  return await apiHelpers.tryCatchFetch(() => axios.get(`${BASE_URL}trip-destination/${tripId}/`, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.createRoadTripDestination = async (destinationData) => {
  return await apiHelpers.tryCatchFetch(() => axios.post(`${BASE_URL}trip-destination/`, destinationData, apiHelpers.getCsrfConfig()));
}

RoadTripAPI.deleteRoadTripDestinationById = async (destinationId) => {
  return await apiHelpers.tryCatchFetch(() => axios.delete(`${BASE_URL}trip-destination/${destinationId}/`, apiHelpers.getCsrfConfig()));
}

export default RoadTripAPI;