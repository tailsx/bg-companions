import { ADD_TRAIN, ADD_COMPANY } from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export function addTrain() {
  return { type: ADD_TRAIN };
}

export function addCompany() {
  return { type: ADD_COMPANY };
}
