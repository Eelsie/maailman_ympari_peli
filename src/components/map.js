import React from 'react';

import worldMap from '../img/world-map.svg';

const Map = () => {
  return (
    <div className="map-wrapper">
      <img  src={worldMap} role="presentation"/>
    </div>
  );
}

export default Map;
