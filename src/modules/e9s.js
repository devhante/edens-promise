const SET_PATTERN = 'e9s/SET_PATTERN';

export const setRandomPattern = () => {
  const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const orbDirection = getRandomElement(['left', 'right']);
  const gazeDirection = getRandomElement([
    'top',
    'bottom',
    'left',
    'right',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight'
  ]);
  let straightDirection = '';
  let diagonalDirection = '';

  if (['top', 'bottom'].includes(gazeDirection)) {
    straightDirection = getRandomElement(['left', 'right']);
  } else if (['left', 'right'].includes(gazeDirection)) {
    straightDirection = getRandomElement(['top', 'bottom']);
  } else if (['topLeft', 'bottomRight'].includes(gazeDirection)) {
    diagonalDirection = getRandomElement(['topRight', 'bottomLeft']);
  } else if (['topRight', 'bottomLeft'].includes(gazeDirection)) {
    diagonalDirection = getRandomElement(['topLeft', 'bottomRight']);
  }

  if (gazeDirection === 'top' && straightDirection === 'left') {
    diagonalDirection = getRandomElement(['topLeft', 'bottomRight']);
  } else if (gazeDirection === 'top' && straightDirection === 'right') {
    diagonalDirection = getRandomElement(['topRight', 'bottomLeft']);
  } else if (gazeDirection === 'bottom' && straightDirection === 'left') {
    diagonalDirection = getRandomElement(['topRight', 'bottomLeft']);
  } else if (gazeDirection === 'bottom' && straightDirection === 'right') {
    diagonalDirection = getRandomElement(['topLeft', 'bottomRight']);
  } else if (gazeDirection === 'left' && straightDirection === 'top') {
    diagonalDirection = getRandomElement(['topLeft', 'bottomRight']);
  } else if (gazeDirection === 'left' && straightDirection === 'bottom') {
    diagonalDirection = getRandomElement(['topRight', 'bottomLeft']);
  } else if (gazeDirection === 'right' && straightDirection === 'top') {
    diagonalDirection = getRandomElement(['topRight', 'bottomLeft']);
  } else if (gazeDirection === 'right' && straightDirection === 'bottom') {
    diagonalDirection = getRandomElement(['topLeft', 'bottomRight']);
  } else if (gazeDirection === 'topLeft' && diagonalDirection === 'topRight') {
    straightDirection = getRandomElement(['top', 'bottom']);
  } else if (
    gazeDirection === 'topLeft' &&
    diagonalDirection === 'bottomLeft'
  ) {
    straightDirection = getRandomElement(['left', 'right']);
  } else if (
    gazeDirection === 'bottomRight' &&
    diagonalDirection === 'topRight'
  ) {
    straightDirection = getRandomElement(['left', 'right']);
  } else if (
    gazeDirection === 'bottomRight' &&
    diagonalDirection === 'bottomLeft'
  ) {
    straightDirection = getRandomElement(['top', 'bottom']);
  } else if (gazeDirection === 'topRight' && diagonalDirection === 'topLeft') {
    straightDirection = getRandomElement(['top', 'bottom']);
  } else if (
    gazeDirection === 'topRight' &&
    diagonalDirection === 'bottomRight'
  ) {
    straightDirection = getRandomElement(['left', 'right']);
  } else if (
    gazeDirection === 'bottomLeft' &&
    diagonalDirection === 'topLeft'
  ) {
    straightDirection = getRandomElement(['left', 'right']);
  } else if (
    gazeDirection === 'bottomLeft' &&
    diagonalDirection === 'bottomRight'
  ) {
    straightDirection = getRandomElement(['top', 'bottom']);
  }

  const result = {
    orbDirection,
    gazeDirection,
    straightDirection,
    diagonalDirection
  };

  return {
    type: SET_PATTERN,
    payload: result
  };
};

const initialState = {
  pattern: {
    orbDirection: '',
    gazeDirection: '',
    straightDirection: '',
    diagonalDirection: ''
  }
};

export default function e9s(state = initialState, action) {
  switch (action.type) {
    case SET_PATTERN:
      return {
        ...state,
        pattern: action.payload
      };
    default:
      return state;
  }
}
