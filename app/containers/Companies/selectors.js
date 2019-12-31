import { createSelector } from 'reselect';

const selectCompanies = state => state.companies;

const makeSelectCompanies = () =>
  createSelector(selectCompanies, companies =>
    Object.entries(companies).reduce(
      (accumulator, [key, value]) => [
        ...accumulator,
        {
          companyId: key,
          ...value,
        },
      ],
      [],
    ),
  );

export { selectCompanies, makeSelectCompanies };
