import { createSelector } from 'reselect';

const selectTrains = state => state.trains;

const makeSelectTrains = () =>
  createSelector(selectTrains, trains =>
    Object.entries(trains).reduce(
      (accumulator, [key, value]) => [
        ...accumulator,
        {
          trainId: key,
          ...value,
        },
      ],
      [],
    ),
  );

export { selectTrains, makeSelectTrains };
