import { createSelector } from 'reselect';

const select18xx = state => state.companion18xx;

const makeSelectCompanies = () =>
  createSelector(select18xx, companionState => companionState.companies);

export { select18xx, makeSelectCompanies };
