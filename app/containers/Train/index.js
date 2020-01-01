import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Train from './Train';
import { makeSelectTrainName } from './selectors';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = () =>
  createStructuredSelector({
    trainName: makeSelectTrainName(),
  });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Train);
export { mapDispatchToProps };
