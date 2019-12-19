import { createSelector } from 'reselect';

const select18cz = state => state.companion18cz;

const makeSelectTrains = () => createSelector(select18cz, state18cz => state18cz.before.trains);
const makeSelectStations = () => createSelector(select18cz, state18cz => state18cz.before.stations);
const makeSelectPrivates = () => createSelector(select18cz, state18cz => state18cz.before.privates);
const makeSelectTreasury = () => createSelector(select18cz, state18cz => state18cz.before.treasury);
const makeSelectTurnStations = () =>
  createSelector(select18cz, state18cz => state18cz.turn.stations);

export {
  select18cz,
  makeSelectPrivates,
  makeSelectStations,
  makeSelectTrains,
  makeSelectTreasury,
  makeSelectTurnStations,
};
