import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { floatCompany, changeInitSharePrice } from './actions';
import { makeSelectCompanies } from './selectors';
import reducer from './reducer';
import Companion18xx from './Company';

const mapDispatchToProps = dispatch => ({
  onFloatCompany: (id, name, initSharePrice) => dispatch(floatCompany(id, name, initSharePrice)),
  onChangeSharePrice: (id, value) => dispatch(changeInitSharePrice(id, value)),
});

const mapStateToProps = createStructuredSelector({
  
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'company', reducer });

export default compose(withReducer, withConnect)(Companion18xx);
export { mapDispatchToProps };
