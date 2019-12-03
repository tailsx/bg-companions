import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import {
  addPrivate,
  addStation,
  addTrain,
  changeTreasury,
  /*   removePrivate,
  removeStation,
  removeTrain,
  updatePrivate,
  updateStation,
  updateTrain, */
} from './actions';
import {
  makeSelectPrivates,
  makeSelectStations,
  makeSelectTrains,
  makeSelectTreasury,
} from './selectors';
import reducer from './reducer';
import Companion18cz from './Companion18cz';

const mapDispatchToProps = dispatch => ({
  onChangeTreasury: evt => dispatch(changeTreasury(evt.target.value)),
  onAddPrivate: () => dispatch(addPrivate()),
  onAddStation: () => dispatch(addStation()),
  onAddTrain: () => dispatch(addTrain()),
});

const mapStateToProps = createStructuredSelector({
  privates: makeSelectPrivates(),
  stations: makeSelectStations(),
  trains: makeSelectTrains(),
  treasury: makeSelectTreasury(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companion18cz', reducer });

export default compose(withReducer, withConnect)(Companion18cz);
export { mapDispatchToProps };
