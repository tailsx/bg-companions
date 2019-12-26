// import generateId from '../../utils/generateId';

import { ADD_COMPANY } from './constants';

// The initial state of the App
const initialState = {
  companies: [],
};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return { ...state, companies: [...state.companies, { text: 'company' }] };
    default:
      return state;
  }
};

export default companion18czReducer;
