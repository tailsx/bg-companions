import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import Treasury from './Treasury';

const mapDispatchToProps = (dispatch, ownProps) => ({});

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'treasury', reducer });

export default compose(withReducer, withConnect)(Treasury);
export { mapDispatchToProps };
