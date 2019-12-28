import {  CREATE_COMPANY } from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export function createCompany() {
  return { type: CREATE_COMPANY };
}
