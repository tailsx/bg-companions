const selectTrainData = state => state.trains.byId;
const selectTrainIds = state => state.trains.allIds;

export { selectTrainData, selectTrainIds };
