import {
  select18cz,
  makeSelectPrivates,
  makeSelectStations,
  makeSelectTrains,
  makeSelectTreasury,
} from '../selectors';

describe('select18cz', () => {
  it('should select 18cz state', () => {
    const state = {
      trains: [],
      stations: [],
      privates: [],
      treasury: 0,
    };
    const mockedState = {
      companion18cz: state,
    };
    expect(select18cz(mockedState)).toEqual(state);
  });
});

describe('makeSelectPrivates', () => {
  const privateSelector = makeSelectPrivates();
  it('should select private companies', () => {
    const priv = {
      revenue: 0,
      hasAbility: false,
      marketValue: 0,
    };
    const mockedState = {
      companion18cz: {
        trains: [],
        stations: [],
        privates: [priv],
        treasury: 0,
      },
    };
    expect(privateSelector(mockedState)).toEqual([priv]);
  });
});

describe('makeSelectStations', () => {
  const stationSelector = makeSelectStations();
  it('should select stations', () => {
    const station = {
      type: '$10',
      amount: 1,
    };
    const mockedState = {
      companion18cz: {
        trains: [],
        stations: [station],
        privates: [],
        treasury: 0,
      },
    };
    expect(stationSelector(mockedState)).toEqual([station]);
  });
});

describe('makeSelectTrains', () => {
  const trainSelector = makeSelectTrains();
  it('should select trains', () => {
    const train = {
      type: 'train',
      name: 'test-train',
      lastRan: 100,
    };
    const mockedState = {
      companion18cz: {
        trains: [train],
        stations: [],
        privates: [],
        treasury: 0,
      },
    };
    expect(trainSelector(mockedState)).toEqual([train]);
  });
});

describe('makeSelectTreasury', () => {
  const treasurySelector = makeSelectTreasury();
  it('should select treasury', () => {
    const treasury = 50;
    const mockedState = {
      companion18cz: {
        trains: [],
        stations: [],
        privates: [],
        treasury,
      },
    };
    expect(treasurySelector(mockedState)).toEqual(treasury);
  });
});
