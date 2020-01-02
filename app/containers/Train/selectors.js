import { createSelector } from 'reselect';

const selectTrain = (state, props) => state.trains.data[props.trainId];

const makeSelectTrainName = () => createSelector(selectTrain, train => train.trainName);
const makeSelectTotalRevenue = () => createSelector(selectTrain, train => train.totalRevenue);
const makeSelectCanEditName = () => createSelector(selectTrain, train => train.canEditName);
const makeSelectCanEditRevenue = () => createSelector(selectTrain, train => train.canEditRevenue);

export {
  makeSelectTrainName,
  makeSelectCanEditName,
  makeSelectCanEditRevenue,
  makeSelectTotalRevenue,
};
