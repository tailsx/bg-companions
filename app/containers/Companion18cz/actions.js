import {
  ADD_PRIVATE,
  ADD_TRAIN,
  ADD_STATION,
  UPDATE_STATION,
  UPDATE_TRAIN,
  REMOVE_STATION,
  REMOVE_TRAIN,
  CHANGE_TREASURY,
  REMOVE_PRIVATE,
  UPDATE_PRIVATE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object
 */
export function addTrain() {
  return { type: ADD_TRAIN };
}

/**
 * Removes train at index
 *
 * @param {number} index The index to be removed
 *
 * @return {object}    An action object
 */
export function removeTrain(index) {
  return { type: REMOVE_TRAIN, index };
}

/**
 * Updates value in array of trains
 *
 * @param {string} attr Attribute to be updated
 * @param {number} index Index of trains
 * @param {any} value New value to be added
 *
 * @return {object}    An action object
 */
export function updateTrain(attr, index, value) {
  return { type: UPDATE_TRAIN, train: { attr, index, value } };
}

/**
 * Add station
 *
 * @return {object}    An action object
 */
export function addStation() {
  return { type: ADD_STATION };
}

/**
 * Remove station
 *
 * @param {number} index index for element to remove
 *
 * @return {object}    An action object
 */
export function removeStation(index) {
  return { type: REMOVE_STATION, index };
}

/**
 * Update existing station data
 *
 * @param {string} attr Attribute to be updated
 * @param {number} index Index of element to remove
 * @param {any} value New data
 *
 * @return {object}    An action object
 */
export function updateStation(attr, index, value) {
  return { type: UPDATE_STATION, station: { attr, index, value } };
}

/**
 * Add private company
 *
 * @return {object}    An action object
 */
export function addPrivate() {
  return { type: ADD_PRIVATE };
}

/**
 * Remove private company at index
 *
 * @param {number} index index to remove
 *
 * @return {object}    An action object
 */
export function removePrivate(index) {
  return { type: REMOVE_PRIVATE, index };
}

/**
 * Update data of a private company for attribute
 *
 * @param {string} attr Attribute to be updated
 * @param {number} index Index of element to updated
 * @param {any} value New data
 *
 * @return {object}    An action object
 */
export function updatePrivate(attr, index, value) {
  return { type: UPDATE_PRIVATE, priv: { attr, index, value } };
}

/**
 * Change amount in Treasury
 *
 * @param {number} value
 *
 * @return {object}    An action object
 */
export function changeTreasury(value) {
  return { type: CHANGE_TREASURY, value };
}
