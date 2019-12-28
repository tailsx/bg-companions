import { createSelector } from 'reselect';

const selectCompany = state => state.company;

const makeSelectCompanies = () =>
  createSelector(selectCompany, companionState => companionState.floated);

export { selectCompany, makeSelectCompanies };
