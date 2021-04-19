import './Boss.css';
import React from 'react';
import E9_Boss from 'resources/e9_boss.png';
import E9_BossGreen from 'resources/e9_bossgreen.png';

function Boss({ position }) {
  const image = position === 'center' ? E9_Boss : E9_BossGreen;
  return (
    <div className={`Boss ${position}`}>
      <img src={image} alt="Boss" />
    </div>
  );
}

export default Boss;
