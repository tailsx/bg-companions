import {
  FLOAT_COMPANY,
  CHANGE_INIT_SHARE_PRICE,
  CREATE_COMPANY,
  ADD_TRAIN,
  CHANGE_NAME,
  TOOGLE_NAME,
  RUN_ALL,
  RUN_ALL_ASYNC,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export const createCompany = companyId => ({ type: CREATE_COMPANY, payload: { companyId } });

export const runAll = () => ({ type: RUN_ALL });

export const runAllAsync = mapping => ({ type: RUN_ALL_ASYNC, payload: { mapping } });

export const floatCompany = companyId => ({
  type: FLOAT_COMPANY,
  payload: { companyId },
});

export const changeInitSharePrice = (companyId, price) => ({
  type: CHANGE_INIT_SHARE_PRICE,
  payload: { companyId, price },
});

export const addTrain = (companyId, trainId) => ({
  type: ADD_TRAIN,
  payload: { companyId, trainId },
});

export const changeCompanyName = (companyId, companyName) => ({
  type: CHANGE_NAME,
  payload: { companyId, companyName },
});

export const toggleNameEdit = companyId => ({ type: TOOGLE_NAME, payload: { companyId } });
