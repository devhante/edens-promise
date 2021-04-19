const SET_WIDTH = 'root/SET_WIDTH';
const SET_HEIGHT = 'root/SET_HEIGHT';
const SET_TITLE = 'root/SET_TITLE';

export const setWidth = () => ({
  type: SET_WIDTH,
  payload: document.body.offsetWidth
});

export const setHeight = () => ({
  type: SET_HEIGHT,
  payload: document.body.offsetHeight
});

export const setTitle = (value) => ({
  type: SET_TITLE,
  payload: value
});

const initialState = {
  title: 'E9S'
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
