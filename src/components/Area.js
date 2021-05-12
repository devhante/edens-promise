import './Area.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setRandomPattern } from 'modules/e9s';
import { addFailed, addSuccess } from 'modules/root';

function Area() {
  const { pattern } = useSelector((state) => ({
    pattern: state.e9s.pattern
  }));

  const dispatch = useDispatch();
  const onSetRandomPattern = () => dispatch(setRandomPattern());
  const onAddSuccess = () => dispatch(addSuccess());
  const onAddFailed = () => dispatch(addFailed());

  const getAnswer = (arr) => {
    const answer = [true, true, true, true, true, true, true, true];
    arr.forEach((item) => {
      for (let i = 0; i < 8; i++) {
        if (item.includes(Number(i + 1))) {
          answer[i] = false;
        }
      }
    });
    return answer.findIndex((item) => item === true) + 1;
  };

  const handleClickArea = (event) => {
    const arr = [];
    if (pattern.orbDirection === 'left') {
      switch (pattern.gazeDirection) {
        case 'right':
          arr.push('area1234');
          break;
        case 'bottomRight':
          arr.push('area2345');
          break;
        case 'bottom':
          arr.push('area3456');
          break;
        case 'bottomLeft':
          arr.push('area4567');
          break;
        case 'left':
          arr.push('area5678');
          break;
        case 'topLeft':
          arr.push('area6781');
          break;
        case 'top':
          arr.push('area7812');
          break;
        case 'topRight':
          arr.push('area8123');
          break;
        default:
      }
      switch (pattern.straightDirection) {
        case 'left':
          arr.push('area1234');
          break;
        case 'top':
          arr.push('area3456');
          break;
        case 'right':
          arr.push('area5678');
          break;
        case 'bottom':
          arr.push('area7812');
          break;
        default:
      }
      switch (pattern.diagonalDirection) {
        case 'topLeft':
          arr.push('area2345');
          break;
        case 'topRight':
          arr.push('area4567');
          break;
        case 'bottomRight':
          arr.push('area6781');
          break;
        case 'bottomLeft':
          arr.push('area8123');
          break;
        default:
      }
    } else if (pattern.orbDirection === 'right') {
      switch (pattern.gazeDirection) {
        case 'left':
          arr.push('area1234');
          break;
        case 'topLeft':
          arr.push('area2345');
          break;
        case 'top':
          arr.push('area3456');
          break;
        case 'topRight':
          arr.push('area4567');
          break;
        case 'right':
          arr.push('area5678');
          break;
        case 'bottomRight':
          arr.push('area6781');
          break;
        case 'bottom':
          arr.push('area7812');
          break;
        case 'bottomLeft':
          arr.push('area8123');
          break;
        default:
      }
      switch (pattern.straightDirection) {
        case 'right':
          arr.push('area1234');
          break;
        case 'bottom':
          arr.push('area3456');
          break;
        case 'left':
          arr.push('area5678');
          break;
        case 'top':
          arr.push('area7812');
          break;
        default:
      }
      switch (pattern.diagonalDirection) {
        case 'bottomRight':
          arr.push('area2345');
          break;
        case 'bottomLeft':
          arr.push('area4567');
          break;
        case 'topLeft':
          arr.push('area6781');
          break;
        case 'topRight':
          arr.push('area8123');
          break;
        default:
      }
    }
    if (event.target.getAttribute('id').includes(getAnswer(arr))) {
      onAddSuccess();
    } else {
      onAddFailed();
    }
    console.log(getAnswer(arr));
    arr.forEach((item) => {
      document.getElementById(item).setAttribute('class', 'red');
      setTimeout(() => {
        document.getElementById(item).setAttribute('class', '');
      }, 1000);
    });
    setTimeout(() => {
      onSetRandomPattern();
    }, 1000);
  };
  return (
    <div className="Area">
      <svg width="400" height="400">
        <path d="M 0 0 H 400 V 200 H 0 V 0 Z" id="area1234" />
        <path d="M 0 0 H 400 V 400 L 0 0 Z" id="area2345" />
        <path d="M 200 0 H 400 V 400 H 200 V 0 Z" id="area3456" />
        <path d="M 400 0 V 400 H 0 L 400 0 Z" id="area4567" />
        <path d="M 0 200 H 400 V 400 H 0 V 200 Z" id="area5678" />
        <path d="M 0 0 V 400 H 400 L 0 0 Z" id="area6781" />
        <path d="M 0 0 H 200 V 400 H 0 Z" id="area7812" />
        <path d="M 0 0 H 400 L 0 400 V 0 Z" id="area8123" />
        <path
          d="M 0 0 V 200 H 200 L 0 0 Z"
          id="area1"
          onClick={handleClickArea}
        />
        <path
          d="M 0 0 H 200 V 200 L 0 0 Z"
          id="area2"
          onClick={handleClickArea}
        />
        <path
          d="M 400 0 H 200 V 200 L 400 0 Z"
          id="area3"
          onClick={handleClickArea}
        />
        <path
          d="M 400 0 V 200 H 200 L 400 0 Z"
          id="area4"
          onClick={handleClickArea}
        />
        <path
          d="M 400 400 V 200 H 200 L 400 400 Z"
          id="area5"
          onClick={handleClickArea}
        />
        <path
          d="M 400 400 H 200 V 200 L 400 400 Z"
          id="area6"
          onClick={handleClickArea}
        />
        <path
          d="M 0 400 H 200 V 200 L 0 400 Z"
          id="area7"
          onClick={handleClickArea}
        />
        <path
          d="M 0 400 V 200 H 200 L 0 400 Z"
          id="area8"
          onClick={handleClickArea}
        />
      </svg>
    </div>
  );
}

export default Area;
