import './Map.css';
import React from 'react';
import E9_Map from 'resources/e9_map.jpg';
import Boss from 'components/Boss';

function Map() {
  return (
    <div className="Map">
      <img src={E9_Map} alt="Map" />
      <Boss position="center" />
      <Boss position="top" />
      <Boss position="bottom" />
      <Boss position="left" />
      <Boss position="right" />
      <Boss position="topLeft" />
      <Boss position="topRight" />
      <Boss position="bottomLeft" />
      <Boss position="bottomRight" />
    </div>
  );
}

export default Map;
