import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { addTrain } from 'containers/Companies/actions';
import { createTrain } from './actions';
import { makeSelectTrains, makeSelectTrainsById } from './selectors';
import reducer from './reducer';
import Companion18xx from './Trains';


const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreateTrain: () => {
    dispatch(addTrain(ownProps.companyId));
    dispatch(createTrain());
  },
});

const mapStateToProps = createStructuredSelector({
  trains: makeSelectTrains(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'trains', reducer });

export default compose(withReducer, withConnect)(Companion18xx);
export { mapDispatchToProps };
