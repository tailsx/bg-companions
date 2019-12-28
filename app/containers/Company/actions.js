import { FLOAT_COMPANY } from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export function floatCompany(id, name, initSharePrice) {
  return {
    type: FLOAT_COMPANY,
    payload: {
      id,
      name,
      initSharePrice,
    },
  };
}
