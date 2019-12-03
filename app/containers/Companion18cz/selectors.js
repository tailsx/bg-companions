import { createSelector } from 'reselect';

const select18cz = state => state.companion18cz;

const makeSelectTrains = () => createSelector(select18cz, state18cz => state18cz.trains);
const makeSelectStations = () => createSelector(select18cz, state18cz => state18cz.stations);
const makeSelectPrivates = () => createSelector(select18cz, state18cz => state18cz.privates);
const makeSelectTreasury = () => createSelector(select18cz, state18cz => state18cz.treasury);

export { select18cz, makeSelectPrivates, makeSelectStations, makeSelectTrains, makeSelectTreasury };
