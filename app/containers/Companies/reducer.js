import {
  FLOAT_COMPANY,
  CHANGE_INIT_SHARE_PRICE,
  CREATE_COMPANY,
  ADD_TRAIN,
  CHANGE_NAME,
  TOOGLE_NAME,
} from './constants';
import createCompany from '../../utils/companion18xx/createCompany';

// The initial state of the App
const initialState = {
  data: {},
  allIds: [],
};

// Reducer
const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMPANY:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.companyId]: createCompany(),
        },
        allIds: [...state.allIds, action.payload.companyId],
      };
    case ADD_TRAIN:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.companyId]: {
            ...state.data[action.payload.companyId],
            trainIds: [...state.data[action.payload.companyId].trainIds, action.payload.trainId],
          },
        },
      };
    case CHANGE_INIT_SHARE_PRICE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.companyId]: {
            ...state.data[action.payload.companyId],
            initSharePrice: action.payload.price,
          },
        },
      };
    case FLOAT_COMPANY:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.companyId]: {
            ...state.data[action.payload.companyId],
            isFloated: true,
            treasury: state.data[action.payload.companyId].initSharePrice,
          },
        },
      };
    case CHANGE_NAME:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.companyId]: {
            ...state.data[action.payload.companyId],
            companyName: action.payload.companyName,
          },
        },
      };
    case TOOGLE_NAME:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.companyId]: {
            ...state.data[action.payload.companyId],
            canEditName: !state.data[action.payload.companyId].canEditName,
          },
        },
      };
    default:
      return state;
  }
};

export default companiesReducer;
