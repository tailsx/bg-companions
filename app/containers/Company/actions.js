import { ADD_COMPANY } from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export function addCompany() {
  return { type: ADD_COMPANY };
}
