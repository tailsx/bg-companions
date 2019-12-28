// import generateId from '../../utils/generateId';

import { FLOAT_COMPANY, CREATE_COMPANY } from './constants';
import createCompany from '../../utils/companion18xx/createCompany';

// The initial state of the App
const initialState = {
  companies: [],
};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMPANY:
      return { ...state, companies: [...state.companies, createCompany()] };
    case FLOAT_COMPANY:
    default:
      return state;
  }
};

export default companion18czReducer;
