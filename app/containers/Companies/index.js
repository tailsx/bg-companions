import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { createCompany, runAll } from './actions';
import { makeSelectCompanies } from './selectors';
import reducer from './reducer';
import Companion18xx from './Companies';
import generateId from '../../utils/generateId';
import saga from './saga';

const mapDispatchToProps = dispatch => ({
  onCreateCompany: () => dispatch(createCompany(generateId())),
  onRun: () => dispatch(runAll()),
});

const mapStateToProps = createStructuredSelector({
  companies: makeSelectCompanies(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companies', reducer });
const withSaga = injectSaga({ key: 'companies', saga });

export default compose(withReducer, withSaga, withConnect)(Companion18xx);
export { mapDispatchToProps };
