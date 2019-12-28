import { CREATE_COMPANY } from './constants';
import generateId from '../../utils/generateId';
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
        companies: [...state.companies, { id: generateId(), colour: generateColour() }],
      };
    default:
      return state;
  }
};

export default companion18czReducer;
