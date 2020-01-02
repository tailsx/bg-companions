import {
  CREATE_TRAIN,
  TOGGLE_NAME,
  CHANGE_NAME,
  TOGGLE_REVENUE,
  CHANGE_REVENUE,
} from './constants';

// The initial state of the App
const initialState = {
  data: {},
  allIds: [],
};

const createTrain = () => ({
  canEditName: false,
  canEditRevenue: false,
  trainName: 'Unnamed Company',
  totalRevenue: 0,
});

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
            trainName: state.data[action.payload.trainId].trainName || 'Unnamed Company',
          },
        },
      };
    case TOGGLE_REVENUE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.trainId]: {
            ...state.data[action.payload.trainId],
            canEditRevenue: !state.data[action.payload.trainId].canEditRevenue,
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
    case CHANGE_REVENUE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.trainId]: {
            ...state.data[action.payload.trainId],
            totalRevenue:
              action.payload.revenue && action.payload.revenue > 0 ? action.payload.revenue : 0,
          },
        },
      };
    default:
      return state;
  }
};

export default companion18czReducer;
