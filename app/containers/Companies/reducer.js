import {
  FLOAT_COMPANY,
  CHANGE_INIT_SHARE_PRICE,
  CREATE_COMPANY,
  ADD_TRAIN,
  CHANGE_NAME,
  TOOGLE_NAME,
  RUN_ALL_ASYNC,
} from './constants';

const MAX_NUMBER_SHARES = 10;
const DEFAULT_COMPANY_NAME = 'Unnamed Company';

// The initial state of the App
const initialState = {
  data: {},
  allIds: [],
  trainsByCompanyId: {},
};

// helpers
const createCompany = () => ({
  companyName: 'Unnamed Company',
  canEditName: false,
  isFloated: false,
});

const sumTrainRevenue = (trainIds, trainsData) =>
  trainIds.reduce((sum, trainId) => sum + trainsData[trainId].totalRevenue, 0);

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
        trainsByCompanyId: {
          ...state.trainsByCompanyId,
          [action.payload.companyId]: [],
        },
      };
    case ADD_TRAIN:
      return {
        ...state,
        trainsByCompanyId: {
          ...state.trainsByCompanyId,
          [action.payload.companyId]: [
            ...state.trainsByCompanyId[action.payload.companyId],
            action.payload.trainId,
          ],
        },
      };
    case CHANGE_INIT_SHARE_PRICE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.companyId]: {
            ...state.data[action.payload.companyId],
            initSharePrice:
              action.payload.price && action.payload.price > 0 ? action.payload.price : 0,
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
            treasury: state.data[action.payload.companyId].initSharePrice * MAX_NUMBER_SHARES,
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
            companyName: state.data[action.payload.companyId].companyName || DEFAULT_COMPANY_NAME,
          },
        },
      };
    case RUN_ALL_ASYNC:
      return {
        ...state,
        yoyo: action.payload.mapping,
      };
    default:
      return state;
  }
};

export default companiesReducer;
