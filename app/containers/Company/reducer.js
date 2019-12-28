import { FLOAT_COMPANY } from './constants';
import createFloatedCompany from '../../utils/companion18xx/createFloatedCompany';

// The initial state of the App
const initialState = {
  floated: [],
};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLOAT_COMPANY:
      return {
        ...state,
        floated: [
          ...state.floated,
          createFloatedCompany(
            action.payload.id,
            action.payload.name,
            action.payload.initSharePrice,
          ),
        ],
      };
    default:
      return state;
  }
};

export default companion18czReducer;
