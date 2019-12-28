import { createSelector } from 'reselect';

const select18xx = state => state.company;

const makeSelectCompanies = () => createSelector(select18xx, companionState => companionState.yo);

export { select18xx, makeSelectCompanies };
