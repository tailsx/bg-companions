import { CREATE_TRAIN } from './constants';
import createTrain from '../../utils/companion18xx/createTrain';

// The initial state of the App
const initialState = {
  byId: {},
  allIds: [],
};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRAIN:
      return {
        ...state,
        byId: { ...state.byId, [action.payload.trainId]: createTrain() },
        allIds: [...state.allIds, action.payload.trainId],
      };
    default:
      return state;
  }
};

export default companion18czReducer;
