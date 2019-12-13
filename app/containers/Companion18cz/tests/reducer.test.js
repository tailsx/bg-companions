import createPrivate from '../../../utils/companion18cz/createPrivate';
import createStation from '../../../utils/companion18cz/createStation';
import createTrain from '../../../utils/companion18cz/createTrain';
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
  changeTurnStation,
} from '../actions';

const setup = propsOverrides => {
  const props = {
    trains: [],
    stations: [],
    privates: [],
    treasury: 0,
    turn: [],
    ...propsOverrides,
  };

  return props;
};

describe('companion18czReducer', () => {
  it('should return the initial state', () => {
    const expectedResult = { trains: [], stations: [], privates: [], treasury: 0, turn: [] };
    const result = companion18czReducer(undefined, {});

    expect(result).toEqual(expectedResult);
  });

  it('should add train', () => {
    const state = setup();
    const { trains: result } = companion18czReducer(state, addTrain());
    expect(result).toHaveLength(1);

    const { type, name, lastRan, id } = result[0];
    expect(type).toEqual('');
    expect(name).toEqual('');
    expect(lastRan).toEqual(0);
    expect(id).toHaveLength(8);
  });

  it('should remove train, given index 1 from array length 3', () => {
    const train1 = createTrain('train1', 'train', 100);
    const train2 = createTrain('train2', 'train', 100);
    const train3 = createTrain('train3', 'train', 100);
    const removedIndex = 1;

    const state = setup({ trains: [train1, train2, train3] });
    const expectedResult = { ...state, trains: [train1, train3] };
    const result = companion18czReducer(state, removeTrain(removedIndex));

    expect(result).toEqual(expectedResult);
  });

  it('should update train', () => {
    const oldName = 'test-train';
    const newName = 'new-train';
    const train = createTrain(oldName, 'train', 100);
    const updateIndex = 0;

    const state = setup({ trains: [train] });
    const expectedResult = { ...state, trains: [{ ...train, name: newName }] };
    const result = companion18czReducer(state, updateTrain('name', updateIndex, newName));

    expect(result).toEqual(expectedResult);
  });

  it('should add station type', () => {
    const state = setup();
    const { stations: result } = companion18czReducer(state, addStation());
    expect(result).toHaveLength(1);

    const { id, type, amount } = result[0];
    expect(type).toEqual('');
    expect(amount).toEqual(0);
    expect(id).toHaveLength(8);
  });

  it('should remove station type', () => {
    const remainingStation = createStation('station', 1);
    const removedIndex = 1;

    const state = setup({ stations: [remainingStation, createStation('deleted', 3)] });
    const expectedResult = { ...state, stations: [remainingStation] };
    const result = companion18czReducer(state, removeStation(removedIndex));

    expect(result).toEqual(expectedResult);
  });

  it('should update station type', () => {
    const oldType = 'stationA';
    const newType = 'stationB';
    const station = createStation(oldType, 1);
    const updateIndex = 0;

    const state = setup({ stations: [station] });
    const expectedResult = { ...state, stations: [{ ...station, type: newType }] };
    const result = companion18czReducer(state, updateStation('type', updateIndex, newType));

    expect(result).toEqual(expectedResult);
  });

  it('should add private', () => {
    const state = setup();
    const { privates: result } = companion18czReducer(state, addPrivate());
    expect(result).toHaveLength(1);

    const { id, revenue, hasAbility, marketValue } = result[0];
    expect(revenue).toEqual(0);
    expect(hasAbility).toBeFalsy();
    expect(marketValue).toEqual(0);
    expect(id).toHaveLength(8);
  });

  it('should remove private', () => {
    const remainingPrivate = createPrivate(200, 100, true);
    const removedIndex = 1;

    const state = setup({ privates: [remainingPrivate, createPrivate(300, 100, false)] });
    const result = companion18czReducer(state, removePrivate(removedIndex));
    const expectedResult = { ...state, privates: [remainingPrivate] };

    expect(result).toEqual(expectedResult);
  });

  it('should update private', () => {
    const oldRevenue = 100;
    const newRevenue = 200;
    const priv = createPrivate(oldRevenue, 200, true);
    const updateIndex = 0;

    const state = setup({ privates: [priv] });
    const expectedResult = { ...state, privates: [{ ...priv, revenue: newRevenue }] };
    const result = companion18czReducer(state, updatePrivate('revenue', updateIndex, newRevenue));

    expect(result).toEqual(expectedResult);
  });

  it('should add treasury', () => {
    const amount = 300;

    const state = setup({ treasury: 300 });
    const result = companion18czReducer(state, changeTreasury(amount));
    const expectedResult = { ...state, treasury: amount };

    expect(result).toEqual(expectedResult);
  });

  it('should add more stations during turn', () => {
    const value = 5;
    const station = createStation('train-type', 3);

    const state = setup({ stations: [station] });
    const result = companion18czReducer(state, changeTurnStation(station.id, value));
    const expectedResult = { ...state, stations: [{ ...station, mods: { amount: value } }] };
    expect(result).toEqual(expectedResult);
  });
});
