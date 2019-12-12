import {
  ADD_PRIVATE,
  ADD_TRAIN,
  ADD_STATION,
  UPDATE_PRIVATE,
  UPDATE_STATION,
  UPDATE_TRAIN,
  REMOVE_PRIVATE,
  REMOVE_STATION,
  REMOVE_TRAIN,
  CHANGE_TREASURY,
} from '../constants';

import {
  addTrain,
  removeTrain,
  updateTrain,
  addStation,
  removeStation,
  updateStation,
  addPrivate,
  removePrivate,
  updatePrivate,
  changeTreasury,
} from '../actions';

describe('Companion18cz Actions', () => {
  describe('trains actions', () => {
    it('should return the correct add train action', () => {
      const expectedResult = {
        type: ADD_TRAIN,
      };

      expect(addTrain()).toEqual(expectedResult);
    });

    it('should return correct remove train action', () => {
      const index = 1;
      const expectedResult = {
        type: REMOVE_TRAIN,
        index,
      };

      expect(removeTrain(index)).toEqual(expectedResult);
    });

    it('should return correct update train action', () => {
      const attr = 'name';
      const index = 0;
      const value = 'test';
      const expectedResult = {
        type: UPDATE_TRAIN,
        train: { attr, index, value },
      };

      expect(updateTrain(attr, index, value)).toEqual(expectedResult);
    });
  });

  describe('station actions', () => {
    it('should return add station action', () => {
      const expectedResult = {
        type: ADD_STATION,
      };

      expect(addStation()).toEqual(expectedResult);
    });

    it('should return remove station action', () => {
      const index = 1;
      const expectedResult = {
        type: REMOVE_STATION,
        index,
      };

      expect(removeStation(index)).toEqual(expectedResult);
    });

    it('should return update station action', () => {
      const attr = 'name';
      const index = 0;
      const value = 'test';
      const expectedResult = {
        type: UPDATE_STATION,
        station: {
          attr,
          index,
          value,
        },
      };

      expect(updateStation(attr, index, value)).toEqual(expectedResult);
    });
  });

  describe('privates actions', () => {
    it('should return add privates action', () => {
      const expectedResult = {
        type: ADD_PRIVATE,
      };

      expect(addPrivate()).toEqual(expectedResult);
    });

    it('should return remove privates action', () => {
      const index = 0;
      const expectedResult = {
        type: REMOVE_PRIVATE,
        index,
      };
      expect(removePrivate(index)).toEqual(expectedResult);
    });

    it('should return update privates action', () => {
      const attr = 'marketValue';
      const index = 0;
      const value = 40;

      const expectedResult = { type: UPDATE_PRIVATE, priv: { attr, index, value } };
      expect(updatePrivate(attr, index, value)).toEqual(expectedResult);
    });
  });

  describe('treasury actions', () => {
    it('change treasury', () => {
      const value = 50;
      const expectedResult = {
        type: CHANGE_TREASURY,
        value,
      };

      expect(changeTreasury(value)).toEqual(expectedResult);
    });
  });
});
