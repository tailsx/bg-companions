import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import Companion18xx from './Companion18xx';

const mapDispatchToProps = () => ({});

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companion18xx', reducer });

export default compose(withReducer, withConnect)(Companion18xx);
export { mapDispatchToProps };