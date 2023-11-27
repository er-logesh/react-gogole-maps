// Map.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 27.175242679363027, 
    lng: 78.0421477164835,
  };

  return (
    <LoadScript
      googleMapsApiKey="GOOGLE_MAPS_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={18} // Adjust the zoom level as needed
      />
    </LoadScript>
  );
};

export default Map;
