import React from 'react';

import worldMap from '../img/world-map.svg';
import brushbg from '../img/brush_bg.png';


const Map = () => {
  return (
    <div className="map-wrapper">
      <img className="brush-bg" src={brushbg} role="presentation"/>
      <img className="brush map-img" src={worldMap} role="presentation"/>
    </div>
  );
}

export default Map;
