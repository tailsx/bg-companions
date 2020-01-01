import { FLOAT_COMPANY, CHANGE_INIT_SHARE_PRICE, CREATE_COMPANY, ADD_TRAIN } from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export function createCompany(companyId) {
  return { type: CREATE_COMPANY, payload: { companyId } };
}

export function floatCompany(id, name, initSharePrice) {
  return {
    type: FLOAT_COMPANY,
    payload: { id, name, initSharePrice },
  };
}

export function changeInitSharePrice(id, price) {
  return {
    type: CHANGE_INIT_SHARE_PRICE,
    payload: { id, price },
  };
}

export function addTrain(companyId, trainId) {
  return {
    type: ADD_TRAIN,
    payload: { companyId, trainId },
  };
}
