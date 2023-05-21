import React, { useEffect, useState } from 'react';

const DroneComponent = ({ latitude, longitude, time }) => {
  const [dronePosition, setDronePosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    // Perform drone motion calculations based on the input data
    const moveDrone = () => {
      // Calculate the step size for each interval
      const stepLat = (latitude - 0) / time;
      const stepLng = (longitude - 0) / time;

      let currentLat = 0;
      let currentLng = 0;

      // Update the drone position at regular intervals
      const interval = setInterval(() => {
        currentLat += stepLat;
        currentLng += stepLng;
        setDronePosition({ lat: currentLat, lng: currentLng });
      }, 1000);

      // Stop the interval after the specified time
      setTimeout(() => {
        clearInterval(interval);
        setDronePosition({ lat: latitude, lng: longitude });
      }, time * 1000);
    };

    moveDrone();
  }, [latitude, longitude, time]);

  return <div>Drone position: {dronePosition.lat}, {dronePosition.lng}</div>;
};

export default DroneComponent;