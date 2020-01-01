import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Train from './Train';
import { makeSelectTrainName, makeSelectCanEditName } from './selectors';

import { chnageTrainName, toggleEditName } from '../Trains/actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggleName: () => dispatch(toggleEditName(ownProps.trainId)),
  onChangeName: evt => dispatch(chnageTrainName(ownProps.trainId, evt.target.value)),
});

const mapStateToProps = () =>
  createStructuredSelector({
    trainName: makeSelectTrainName(),
    canEditName: makeSelectCanEditName(),
  });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Train);
export { mapDispatchToProps };
