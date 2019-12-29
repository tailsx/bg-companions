import { FLOAT_COMPANY, CHANGE_INIT_SHARE_PRICE } from './constants';

// The initial state of the App
const initialState = {};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INIT_SHARE_PRICE:
      return {
        ...state,
        [action.payload.id]: { initSharePrice: action.payload.price },
      };
    case FLOAT_COMPANY:
      return {
        ...state,
        [action.payload.id]: { isFloated: true, treasury: state[action.payload.id].initSharePrice },
      };
    default:
      return state;
  }
};

export default companion18czReducer;
