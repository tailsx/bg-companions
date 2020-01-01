import { createSelector } from 'reselect';

const selectTrains = state => state.trains;
const selectCompanyId = (_, props) => props.companyId;

const makeSelectFilteredTrains = () =>
  createSelector(selectCompanyTrains, selectTrains, (companyTrains, allTrains) =>
    companyTrains.map(trainId => allTrains[trainId]),
  );

const makeSelectTrainsById = () =>
  createSelector(selectCompanyId, selectTrains, (companyId, trains) =>
    Object.entries(trains).reduce(
      (accumulator, [key, value]) => [
        ...accumulator,
        companyId === key && {
          trainId: key,
          ...value,
        },
      ],
      [],
    ),
  );

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

export { selectTrains, selectCompanyId, makeSelectTrains, makeSelectTrainsById };
