import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { floatCompany, changeInitSharePrice } from 'containers/Companies/actions';
import { makeSelectCompanyName, makeSelectCompanyInitPrice } from './selectors';
import Company from './Company';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFloatCompany: () => dispatch(floatCompany(ownProps.companyId)),
  onChangeInitPrice: evt => dispatch(changeInitSharePrice(ownProps.companyId, evt.target.value)),
});

const mapStateToProps = () =>
  createStructuredSelector({
    companyName: makeSelectCompanyName(),
    initSharePrice: makeSelectCompanyInitPrice(),
  });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Company);
export { mapDispatchToProps };
