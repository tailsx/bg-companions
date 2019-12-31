import { FLOAT_COMPANY, CHANGE_INIT_SHARE_PRICE, CREATE_COMPANY } from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export function createCompany() {
  return { type: CREATE_COMPANY };
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
