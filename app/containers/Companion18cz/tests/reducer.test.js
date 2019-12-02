import companion18czReducer from '../reducer';

describe('companion18czReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      before: {
        trains: [],
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(companion18czReducer(undefined, {})).toEqual(expectedResult);
  });
});
