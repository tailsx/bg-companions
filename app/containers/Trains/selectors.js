import { createSelector } from 'reselect';

const selectTrainData = state => state.trains.byId;
const selectOwnedTrains = (_, props) => props.trainIds;

const makeSelectTrains = () =>
  createSelector(selectTrainData, selectOwnedTrains, (trainsData, trainIds) =>
    trainIds.map(trainId => ({ trainId, ...trainsData[trainId] })),
  );

export { selectTrainData, selectOwnedTrains, makeSelectTrains };
