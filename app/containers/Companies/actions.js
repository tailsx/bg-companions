import {
  FLOAT_COMPANY,
  CHANGE_INIT_SHARE_PRICE,
  CREATE_COMPANY,
  ADD_TRAIN,
  CHANGE_NAME,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export const createCompany = companyId => ({ type: CREATE_COMPANY, payload: { companyId } });

export const floatCompany = (id, name, initSharePrice) => ({
  type: FLOAT_COMPANY,
  payload: { id, name, initSharePrice },
});

export const changeInitSharePrice = (id, price) => ({
  type: CHANGE_INIT_SHARE_PRICE,
  payload: { id, price },
});

export const addTrain = (companyId, trainId) => ({
  type: ADD_TRAIN,
  payload: { companyId, trainId },
});

export const changeCompanyName = companyName => ({ type: CHANGE_NAME, payload: { companyName } });
