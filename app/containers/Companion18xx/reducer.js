import { CREATE_COMPANY } from './constants';
import createCompany from '../../utils/companion18xx/createCompany';
import generateColour from '../../utils/generateColour';

// The initial state of the App
const initialState = {
  companies: [],
};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMPANY:
      return {
        ...state,
        companies: [...state.companies, { ...createCompany(), colour: generateColour() }],
      };
    default:
      return state;
  }
};

export default companion18czReducer;
