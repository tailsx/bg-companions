import {
  FLOAT_COMPANY,
  CHANGE_INIT_SHARE_PRICE,
  CREATE_COMPANY,
  ADD_TRAIN,
  CHANGE_NAME,
} from './constants';
import createCompany from '../../utils/companion18xx/createCompany';

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
        byId: {
          ...state.byId,
          [action.payload.companyId]: createCompany(),
        },
        allIds: [...state.allIds, action.payload.companyId],
      };
    case ADD_TRAIN:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.companyId]: {
            ...state.byId[action.payload.companyId],
            trainIds: [...state.byId[action.payload.companyId].trainIds, action.payload.trainId],
          },
        },
      };
    case CHANGE_INIT_SHARE_PRICE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.companyId]: {
            ...state.byId[action.payload.companyId],
            initSharePrice: action.payload.price,
          },
        },
      };
    case FLOAT_COMPANY:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.companyId]: {
            ...state.byId[action.payload.companyId],
            isFloated: true,
            treasury: state.byId[action.payload.companyId].initSharePrice,
          },
        },
      };
    case CHANGE_NAME:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.companyId]: {
            ...state.byId[action.payload.companyId],
            companyName: action.payload.companyName,
          },
        },
      };
    default:
      return state;
  }
};

export default companiesReducer;
