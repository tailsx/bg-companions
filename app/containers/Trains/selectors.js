import { createSelector } from 'reselect';

const selectTrainData = state => state.trains.data;
const selectTrainIds = state => state.trains.allIds;

const selectTrainSubset = (_, props) => props.trainIds;

const makeSelectAllRevenue = () =>
  createSelector(selectTrainData, selectTrainSubset, (data, trainIds) =>
    trainIds.reduce((sum, trainId) => sum + data[trainId].totalRevenue, 0),
  );

export { selectTrainData, selectTrainIds, makeSelectAllRevenue };
