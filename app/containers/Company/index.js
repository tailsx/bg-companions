import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { floatCompany } from './actions';
import { makeSelectCompanies } from './selectors';
import reducer from './reducer';
import Companion18xx from './Company';

const mapDispatchToProps = dispatch => ({ onFloatCompany: () => dispatch(floatCompany()) });

const mapStateToProps = createStructuredSelector({
  yo: makeSelectCompanies(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'company', reducer });

export default compose(withReducer, withConnect)(Companion18xx);
export { mapDispatchToProps };
