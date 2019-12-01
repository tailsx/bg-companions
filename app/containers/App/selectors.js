import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRoute = state => state.router;

const makeSelectCurrentUser = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  createSelector(selectGlobal, globalState => globalState.currentUser);

const makeSelectLoading = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  createSelector(selectGlobal, globalState => globalState.loading);

const makeSelectError = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  createSelector(selectGlobal, globalState => globalState.error);

const makeSelectRepos = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  createSelector(selectRoute, routeState => routeState.location);

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
};
