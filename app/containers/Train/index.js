import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Train from './Train';
import {
  makeSelectTrainName,
  makeSelectCanEditName,
  makeSelectCanEditRevenue,
  makeSelectTotalRevenue,
} from './selectors';

import {
  changeTrainName,
  toggleEditName,
  toggleEditRevenue,
  changeTrainRevenue,
} from '../Trains/actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggleName: () => dispatch(toggleEditName(ownProps.trainId)),
  onChangeName: evt => dispatch(changeTrainName(ownProps.trainId, evt.target.value)),
  onToggleRevenue: () => dispatch(toggleEditRevenue(ownProps.trainId)),
  onChangeRevenue: evt =>
    dispatch(changeTrainRevenue(ownProps.trainId, parseInt(evt.target.value, 10))),
});

const mapStateToProps = () =>
  createStructuredSelector({
    trainName: makeSelectTrainName(),
    canEditName: makeSelectCanEditName(),
    totalRevenue: makeSelectTotalRevenue(),
    canEditRevenue: makeSelectCanEditRevenue(),
  });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Train);
export { mapDispatchToProps };
