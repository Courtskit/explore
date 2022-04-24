import { useNavigate } from "react-router-dom";
import React from "react";
import '../App.css';
import Search from "../components/SearchMap";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "80vw",
  height: "80vh",
};
const center = {
  lat: 47.444,
  lng: -122.176
};

function Map() {
  const navigate = useNavigate();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE,
    libraries,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <button className="homeButton" onClick={() => navigate('/')}>Home</button>
      <div className="mapPage">
        <Search panTo={panTo} />
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          onLoad={onMapLoad}>
        </GoogleMap>
      </div>
    </div >
  );
}

export default Map;