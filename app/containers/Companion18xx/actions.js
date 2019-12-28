import { FLOAT_COMPANY, CREATE_COMPANY } from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export function floatCompany() {
  return { type: FLOAT_COMPANY };
}

export function createCompany() {
  return { type: CREATE_COMPANY };
}
