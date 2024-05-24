import React, { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { storage } from './firebaseConfig'; // Adjust the path according to your project structure

const MapComponent = () => {
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(0);

  const handleMapClick = (event) => {
    const { latLng } = event;
    const { lat, lng } = latLng.toJSON();
    if (!fromLocation) {
      setFromLocation({ lat, lng });
    } else if (!toLocation) {
      setToLocation({ lat, lng });
      const distance = calculateDistance(fromLocation, { lat, lng });
      setDistance(distance);
      setPrice(distance * 12); // 12 Rs/km
    }
  };

  const calculateDistance = (from, to) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((to.lat - from.lat) * Math.PI) / 180;
    const dLng = ((to.lng - from.lng) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((from.lat * Math.PI) / 180) *
        Math.cos((to.lat * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        fromLocation,
        toLocation,
        distance,
        price,
      };
      const storageRef = storage.ref();
      await storageRef.child('locationData.json').putString(JSON.stringify(data));
      console.log('Data uploaded successfully');
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          zoom={10}
          center={{ lat: 0, lng: 0 }}
          onClick={handleMapClick}
        >
          {fromLocation && <Marker position={fromLocation} />}
          {toLocation && <Marker position={toLocation} />}
        </GoogleMap>
      </LoadScript>
      <div>
        <p>Distance: {distance.toFixed(2)} km</p>
        <p>Price: Rs {price.toFixed(2)}</p>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MapComponent;
