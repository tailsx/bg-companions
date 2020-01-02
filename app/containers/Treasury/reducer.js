import { INITIAL_FUND } from './constants';

// The initial state of the App
const initialState = {};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_FUND:
      return { ...state, [action.payload.id]: action.payload.fund };
    default:
      return state;
  }
};

export default companion18czReducer;
