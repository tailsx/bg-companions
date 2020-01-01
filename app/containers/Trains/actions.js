import { CREATE_TRAIN, CHANGE_NAME, TOGGLE_NAME } from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export function createTrain(trainId) {
  return { type: CREATE_TRAIN, payload: { trainId } };
}

export const toggleEditName = trainId => ({
  type: TOGGLE_NAME,
  payload: { trainId },
});

export const chnageTrainName = (trainId, name) => ({
  type: CHANGE_NAME,
  payload: { trainId, name },
});
