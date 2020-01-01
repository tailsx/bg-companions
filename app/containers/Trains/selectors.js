import { createSelector } from 'reselect';

const selectTrainIds = state => state.trains.allIds;

const selectTrainData = state => state.trains.byId;

const makeSelectTrains = () =>
  createSelector(
    selectTrainData,
    (state, props) => props.trainIds,
    (trainsData, trainIds) => trainIds.map(trainId => ({ trainId, ...trainsData[trainId] })),
  );

export { selectTrainIds, selectTrainData, makeSelectTrains };
