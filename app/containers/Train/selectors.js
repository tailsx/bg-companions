import { createSelector } from 'reselect';

const selectTrain = (state, props) => state.trains.data[props.trainId];

const makeSelectTrainName = () => createSelector(selectTrain, train => train.trainName);
const makeSelectCanEditName = () => createSelector(selectTrain, train => train.canEditName);

export { makeSelectTrainName, makeSelectCanEditName };
