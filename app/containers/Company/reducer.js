import { ADD_COMPANY } from './constants';

const initialState = {
  companies: [],
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return { ...state, companies: [...state.companies, { name: 'new company' }] };
    default:
      return state;
  }
};

export default companyReducer;
