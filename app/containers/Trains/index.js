import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import { addTrain } from 'containers/Companies/actions';

import { createTrain } from './actions';
import { makeSelectAllRevenue } from './selectors';
import reducer from './reducer';
import Trains from './Trains';
import generateId from '../../utils/generateId';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreateTrain: () => {
    const trainId = generateId();

    dispatch(addTrain(ownProps.companyId, trainId));
    dispatch(createTrain(trainId));
  },
});

const mapStateToProps = createStructuredSelector({
  allTrainsRevenue: makeSelectAllRevenue(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'trains', reducer });

export default compose(withReducer, withConnect)(Trains);
export { mapDispatchToProps };
