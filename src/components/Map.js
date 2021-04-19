import './Map.css';
import React from 'react';
import Map_E9 from 'resources/map_e9.jpg';
import Boss from 'components/Boss';

function Map() {
  return (
    <div className="Map">
      <img src={Map_E9} alt="Map" />
      <Boss />
    </div>
  );
}

export default Map;
