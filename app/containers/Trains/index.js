import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { createTrain } from './actions';
import { makeSelectTrains, makeSelectTrainsById } from './selectors';
import reducer from './reducer';
import Companion18xx from './Trains';

const mapDispatchToProps = dispatch => ({
  onCreateTrain: () => dispatch(createTrain()),
});

const mapStateToProps = createStructuredSelector({
  trains: makeSelectTrains(),
  filtered: makeSelectTrainsById(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'trains', reducer });

export default compose(withReducer, withConnect)(Companion18xx);
export { mapDispatchToProps };
