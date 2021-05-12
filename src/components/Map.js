import './Map.css';
import React from 'react';
import E9_Map from 'resources/e9_map.jpg';
import Area from 'components/Area';
import Boss from 'components/Boss';
import { useSelector } from 'react-redux';

function Map() {
  const { pattern } = useSelector((state) => ({
    pattern: state.e9s.pattern
  }));

  return (
    <div className="Map">
      <img src={E9_Map} alt="Map" />
      <Area />
      <Boss
        position="center"
        orb={pattern.orbDirection}
        gaze={pattern.gazeDirection}
      />
      <Boss position={pattern.straightDirection} />
      <Boss position={pattern.diagonalDirection} />
    </div>
  );
}

export default Map;
