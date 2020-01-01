import { FLOAT_COMPANY, CHANGE_INIT_SHARE_PRICE, CREATE_COMPANY, ADD_COMPANY } from './constants';

// The initial state of the App
const initialState = {};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMPANY:
      return {
        ...state,
        [action.payload.companyId]: { isFloated: false, trains: [] },
      };
    case ADD_COMPANY:
      return {
        ...state,
        [action.payload.companyId]: {
          ...state[action.payload.companyId],
          trains: [...state[action.payload.companyId], action.payload.trainId],
        },
      };
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
