// import generateId from '../../utils/generateId';

import { FLOAT_COMPANY } from './constants';

// The initial state of the App
const initialState = {
  companies: [],
};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLOAT_COMPANY:
      return { ...state, companies: [...state.companies, { text: 'company' }] };
    default:
      return state;
  }
};

export default companion18czReducer;
