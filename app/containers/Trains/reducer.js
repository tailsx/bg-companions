import { CREATE_TRAIN } from './constants';
import generateId from '../../utils/generateId';

// The initial state of the App
const initialState = {};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRAIN:
      return {
        ...state,
        [generateId()]: { trainName: 'Train Name' },
      };
    default:
      return state;
  }
};

export default companion18czReducer;
