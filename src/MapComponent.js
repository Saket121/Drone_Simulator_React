import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    let isMapLoaded = false;
    let isScriptLoaded = false;

    const loadMap = async () => {
      if (window.google && window.google.maps && isScriptLoaded && !isMapLoaded) {
        isMapLoaded = true;

        const mapOptions = {
          center: { lat: 0, lng: 0 },
          zoom: 10,
        };

        mapRef.current = new window.google.maps.Map(mapContainerRef.current, mapOptions);
      }
    };

    if (window.google && window.google.maps) {
      isScriptLoaded = true;
      loadMap();
    } else {
      const loader = new Loader({
        apiKey: 'AIzaSyBIqq9lGl9jqKCFl1GLe4S67-ouhqE9MN8',
        version: 'weekly',
        // additional options if needed
      });

      loader.load().then(async () => {
        const { Map } = await window.google.maps.importLibrary('maps');

        isScriptLoaded = true;
        loadMap();
      });
    }

    return () => {
      window.removeEventListener('load', loadMap);
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: '100%', height: '400px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '16px' }}
    />
  );
};

export default MapComponent;