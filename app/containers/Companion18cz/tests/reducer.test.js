import companion18czReducer from '../reducer';

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

describe('companion18czReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      trains: [],
      stations: [],
      privates: [],
      treasury: 0,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(companion18czReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should add train', () => {
    const result = companion18czReducer(state, addTrain()).trains;
    expect(result).toHaveLength(1);

    const { type, name, lastRan, id } = result[0];
    expect(type).toEqual('');
    expect(name).toEqual('');
    expect(lastRan).toEqual(0);
    expect(id).toHaveLength(8);
  });

  it('should remove train, given index 1 from array length 3', () => {
    const train = {
      type: 'train',
      name: 'train',
      lastRan: 100,
    };
    const trains = [
      { ...train, name: 'train1' },
      { ...train, name: 'train2' },
      { ...train, name: 'train3' },
    ];
    const expectedResult = {
      ...state,
      trains: [
        { ...train, name: 'train1' },
        { ...train, name: 'train3' },
      ],
    };

    expect(companion18czReducer({ ...state, trains }, removeTrain(1))).toEqual(expectedResult);
  });

  it('should update train', () => {
    const startTrain = {
      type: 'train',
      name: 'test-train',
      lastRan: 100,
    };
    const expectedTrain = {
      ...startTrain,
      name: 'test-train1',
    };
    const startState = { ...state, trains: [...state.trains, startTrain] };
    const expectedResult = {
      ...state,
      trains: [...state.trains, expectedTrain],
    };

    expect(companion18czReducer(startState, updateTrain('name', 0, expectedTrain.name))).toEqual(
      expectedResult,
    );
  });

  it('should add station type', () => {
    const result = companion18czReducer(state, addStation()).stations;
    expect(result).toHaveLength(1);

    const { id, type, amount } = result[0];
    expect(type).toEqual('');
    expect(amount).toEqual(0);
    expect(id).toHaveLength(8);
  });

  it('should remove station type', () => {
    const station = {
      type: 'station',
      amount: 1,
    };
    const expectedResult = { ...state, stations: [station] };

    expect(
      companion18czReducer(
        { ...state, stations: [station, { type: 'delete', amount: 1 }] },
        removeStation(1),
      ),
    ).toEqual(expectedResult);
  });

  it('should update station type', () => {
    const station = {
      type: '$10',
      amount: 1,
    };

    const expectedResult = { ...state, stations: [{ ...station, type: '$100' }] };

    expect(
      companion18czReducer({ ...state, stations: [station] }, updateStation('type', 0, '$100')),
    ).toEqual(expectedResult);
  });

  it('should add private', () => {
    const result = companion18czReducer(state, addPrivate()).privates;
    expect(result).toHaveLength(1);

    const { id, revenue, hasAbility, marketValue } = result[0];
    expect(revenue).toEqual(0);
    expect(hasAbility).toBeFalsy();
    expect(marketValue).toEqual(0);
    expect(id).toHaveLength(8);
  });

  it('should remove private', () => {
    const priv = {
      revenue: 30,
      hasAbility: false,
      marketValue: 10,
    };
    const privates = [priv, priv];

    const index = 0;
    const expectedResult = { ...state, privates: [priv] };

    expect(companion18czReducer({ ...state, privates }, removePrivate(index))).toEqual(
      expectedResult,
    );
  });

  it('should update private', () => {
    const priv = { revenue: 30, hasAbility: false, marketValue: 30 };
    const startPrivates = [priv];
    const index = 0;
    const attr = 'marketValue';
    const value = 40;
    const expectedResult = {
      ...state,
      privates: [{ ...priv, marketValue: value }],
    };

    expect(
      companion18czReducer(
        { ...state, privates: startPrivates },
        updatePrivate(attr, index, value),
      ),
    ).toEqual(expectedResult);
  });

  it('should add treasury', () => {
    const amount = 300;
    const expectedResult = { ...state, treasury: amount };
    expect(companion18czReducer(state, changeTreasury(amount))).toEqual(expectedResult);
  });
});
