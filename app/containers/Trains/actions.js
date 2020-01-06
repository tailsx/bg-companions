import {
  CREATE_TRAIN,
  CHANGE_NAME,
  TOGGLE_NAME,
  TOGGLE_REVENUE,
  CHANGE_REVENUE,
} from './constants';

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

export const changeTrainName = (trainId, name) => ({
  type: CHANGE_NAME,
  payload: { trainId, name },
});

export const toggleEditRevenue = trainId => ({
  type: TOGGLE_REVENUE,
  payload: { trainId },
});

export const changeTrainRevenue = (trainId, revenue) => ({
  type: CHANGE_REVENUE,
  payload: { trainId, revenue },
});
