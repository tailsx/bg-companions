import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { floatCompany, changeInitSharePrice, createCompany, changeCompanyName } from './actions';
import { makeSelectCompanies } from './selectors';
import reducer from './reducer';
import Companion18xx from './Companies';
import generateId from '../../utils/generateId';

const mapDispatchToProps = dispatch => ({
  onCreateCompany: () => dispatch(createCompany(generateId())),
  onFloatCompany: (id, name, initSharePrice) => dispatch(floatCompany(id, name, initSharePrice)),
  onChangeSharePrice: (id, value) => dispatch(changeInitSharePrice(id, value)),
  onChangeCompanyName: (id, name) => dispatch(changeCompanyName(id, name)),
});

const mapStateToProps = createStructuredSelector({
  companies: makeSelectCompanies(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companies', reducer });

export default compose(withReducer, withConnect)(Companion18xx);
export { mapDispatchToProps };
