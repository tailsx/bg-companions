import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { floatCompany, changeInitSharePrice } from './actions';
import { makeSelectIsFloated } from './selectors';
import reducer from './reducer';
import Companion18xx from './Companies';

const mapDispatchToProps = dispatch => ({
  onFloatCompany: (id, name, initSharePrice) => dispatch(floatCompany(id, name, initSharePrice)),
  onChangeSharePrice: (id, value) => dispatch(changeInitSharePrice(id, value)),
});

const mapStateToProps = createStructuredSelector({
  isFloated: makeSelectIsFloated(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companies', reducer });

export default compose(withReducer, withConnect)(Companion18xx);
export { mapDispatchToProps };
