import React, { useState, useRef } from 'react';
import MapComponent from './MapComponent';
import FormComponent from './FormComponent';
import DroneComponent from './DroneComponent';

const App = () => {
  const [simulationData, setSimulationData] = useState(null);
  const [isSimulationPaused, setIsSimulationPaused] = useState(false);
  const intervalRef = useRef(null);

  const handleSimulate = (data) => {
    setSimulationData(data);
    setIsSimulationPaused(false);
  };

  const handlePauseResume = () => {
    setIsSimulationPaused((prevState) => !prevState);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setSimulationData(null);
    setIsSimulationPaused(false);
  };

  return (
    <div>
      <MapComponent />
      <FormComponent onSimulate={handleSimulate} />
      {simulationData && (
        <div>
          <DroneComponent
            latitude={simulationData.latitude}
            longitude={simulationData.longitude}
            time={simulationData.time}
            isPaused={isSimulationPaused}
            onPauseResume={handlePauseResume}
            onStop={handleStop}
          />
          <button onClick={handlePauseResume}>{isSimulationPaused ? 'Resume' : 'Pause'}</button>
          <button onClick={handleStop}>Stop</button>
        </div>
      )}
    </div>
  );
};

export default App;