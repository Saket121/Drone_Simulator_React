import React, { useState } from 'react';

const FormComponent = ({ onSimulate }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the user's input to the parent component for simulation
    onSimulate({ latitude, longitude, time });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Latitude:
        <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      </label>
      <label>
        Longitude:
        <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      </label>
      <label>
        Time (in seconds):
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <button type="submit">Simulate</button>
    </form>
  );
};

export default FormComponent;