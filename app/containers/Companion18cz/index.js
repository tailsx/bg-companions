import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import Companion18cz from './Companion18cz';

const mapDispatchToProps = dispatch => ({
  onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
});

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companion18cz', reducer });

export default compose(withReducer, withConnect)(Companion18cz);
export { mapDispatchToProps };
