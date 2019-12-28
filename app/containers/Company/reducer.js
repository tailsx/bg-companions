import { FLOAT_COMPANY } from './constants';

// The initial state of the App
const initialState = {
  yo: [],
};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLOAT_COMPANY:
      return { ...state, yo: [...state.yo, 'ewf'] };
    default:
      return state;
  }
};

export default companion18czReducer;
