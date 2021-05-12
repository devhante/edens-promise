import './Boss.css';
import React from 'react';
import E9_Boss from 'resources/e9_boss.png';
import E9_BossLeft from 'resources/e9_boss_left.png';
import E9_BossRight from 'resources/e9_boss_right.png';
import E9_BossGreen from 'resources/e9_bossgreen.png';

function Boss({ position, orb, gaze }) {
  let image = E9_BossGreen;
  if (position === 'center') {
    if (orb === 'left') {
      image = E9_BossLeft;
    } else if (orb === 'right') {
      image = E9_BossRight;
    } else {
      image = E9_Boss;
    }
  }
  return (
    <div className={`Boss ${position} gaze-${gaze}`}>
      <img src={image} alt="Boss" />
    </div>
  );
}

export default Boss;
