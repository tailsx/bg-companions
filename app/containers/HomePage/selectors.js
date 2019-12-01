import { createSelector } from 'reselect';

const selectHome = state => state.home;

const makeSelectUsername = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  createSelector(selectHome, homeState => homeState.username);

export { selectHome, makeSelectUsername };
