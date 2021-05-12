const SET_TITLE = 'root/SET_TITLE';
const ADD_SUCCESS = 'root/ADD_SUCCESS';
const ADD_FAILED = 'root/ADD_FAILED';

export const setTitle = (value) => ({
  type: SET_TITLE,
  payload: value
});

export const addSuccess = (value) => ({
  type: ADD_SUCCESS,
  payload: value
});

export const addFailed = (value) => ({
  type: ADD_FAILED,
  payload: value
});

const initialState = {
  title: 'E9S',
  success: 0,
  failed: 0
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case ADD_SUCCESS:
      return {
        ...state,
        success: state.success + 1
      };
    case ADD_FAILED:
      return {
        ...state,
        failed: state.failed + 1
      };
    default:
      return state;
  }
}
