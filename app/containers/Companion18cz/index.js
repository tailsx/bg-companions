import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import {
  addPrivate,
  addStation,
  addTrain,
  changeTreasury,
  removePrivate,
  removeStation,
  removeTrain,
  updatePrivate,
  updateStation,
  updateTrain,
  changeTurnStations,
  changeTurnTrains,
} from './actions';
import {
  makeSelectPrivates,
  makeSelectStations,
  makeSelectTrains,
  makeSelectTreasury,
  makeSelectTurnStations,
  makeSelectTurnTrains,
} from './selectors';
import reducer from './reducer';
import Companion18cz from './Companion18cz';

const mapDispatchToProps = dispatch => ({
  onChangeTreasury: value => dispatch(changeTreasury(value)),
  onAddPrivate: () => dispatch(addPrivate()),
  onAddStation: () => dispatch(addStation()),
  onAddTrain: () => dispatch(addTrain()),
  onRemovePrivate: index => dispatch(removePrivate(index)),
  onRemoveStation: index => dispatch(removeStation(index)),
  onRemoveTrain: index => dispatch(removeTrain(index)),
  onUpdatePrivate: (name, index, value) => dispatch(updatePrivate(name, index, value)),
  onUpdateStation: (name, index, value) => dispatch(updateStation(name, index, value)),
  onUpdateTrain: (name, index, value) => dispatch(updateTrain(name, index, value)),
  onChangeStation: (stationId, value) => dispatch(changeTurnStations(stationId, value)),
  onTurnTrains: (trainId, value) => dispatch(changeTurnTrains(trainId, value)),
});

const mapStateToProps = createStructuredSelector({
  privates: makeSelectPrivates(),
  stations: makeSelectStations(),
  trains: makeSelectTrains(),
  treasury: makeSelectTreasury(),
  turnStations: makeSelectTurnStations(),
  turnTrains: makeSelectTurnTrains(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companion18cz', reducer });

export default compose(withReducer, withConnect)(Companion18cz);
export { mapDispatchToProps };
