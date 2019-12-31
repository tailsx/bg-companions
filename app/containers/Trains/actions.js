import { CREATE_TRAIN } from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export function createTrain() {
  return { type: CREATE_TRAIN };
}
