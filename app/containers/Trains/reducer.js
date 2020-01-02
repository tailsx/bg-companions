import { CREATE_TRAIN, TOGGLE_NAME, CHANGE_NAME } from './constants';
import createTrain from '../../utils/companion18xx/createTrain';

// The initial state of the App
const initialState = {
  data: {},
  allIds: [],
};

// Reducer
const companion18czReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRAIN:
      return {
        ...state,
        data: { ...state.data, [action.payload.trainId]: createTrain() },
        allIds: [...state.allIds, action.payload.trainId],
      };
    case TOGGLE_NAME:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.trainId]: {
            ...state.data[action.payload.trainId],
            canEditName: !state.data[action.payload.trainId].canEditName,
          },
        },
      };
    case CHANGE_NAME:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.trainId]: {
            ...state.data[action.payload.trainId],
            trainName: action.payload.name,
          },
        },
      };
    default:
      return state;
  }
};

export default companion18czReducer;
