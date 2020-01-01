import { FLOAT_COMPANY, CHANGE_INIT_SHARE_PRICE, CREATE_COMPANY, ADD_TRAIN } from './constants';

// The initial state of the App
const initialState = {
  byId: {},
  allIds: [],
};

// Reducer
const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMPANY:
      return {
        ...state,
        byId: { ...state.byId, [action.payload.companyId]: { isFloated: false, trainIds: [] } },
        allIds: [...state.allIds, action.payload.companyId],
      };
    case ADD_TRAIN:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.companyId]: {
            ...state[action.payload.companyId],
            trains: [...state[action.payload.companyId].trains, action.payload.trainId],
          },
        },
      };
    case CHANGE_INIT_SHARE_PRICE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: { initSharePrice: action.payload.price },
        },
      };
    case FLOAT_COMPANY:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: {
            isFloated: true,
            treasury: state[action.payload.id].initSharePrice,
          },
        },
      };
    default:
      return state;
  }
};

export default companiesReducer;
