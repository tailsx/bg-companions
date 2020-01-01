import { CREATE_TRAIN } from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export function createTrain(trainId) {
  return { type: CREATE_TRAIN, payload: { trainId } };
}
