import './Contents.css';
import React from 'react';
import Map from 'components/Map';
import { useDispatch } from 'react-redux';
import { setRandomPattern } from 'modules/e9s';

function Contents() {
  const dispatch = useDispatch();
  const onSetRandomPattern = () => dispatch(setRandomPattern());

  onSetRandomPattern();

  return (
    <div className="Contents">
      <Map />
    </div>
  );
}

export default Contents;
