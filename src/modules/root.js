const SET_TITLE = 'root/SET_TITLE';

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
