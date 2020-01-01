import { CREATE_TRAIN, TOGGLE_NAME, CHANGE_NAME } from './constants';
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
    case TOGGLE_NAME:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.trainId]: {
            ...state.byId[action.payload.trainId],
            canEditName: !state.byId[action.payload.trainId].canEditName,
          },
        },
      };
    case CHANGE_NAME:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.trainId]: {
            ...state.byId[action.payload.trainId],
            trainName: action.payload.name,
          },
        },
      };
    default:
      return state;
  }
};

export default companion18czReducer;
