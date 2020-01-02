import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  floatCompany,
  changeInitSharePrice,
  changeCompanyName,
  toggleNameEdit,
} from 'containers/Companies/actions';
import {
  makeSelectCompanyName,
  makeSelectCompanyInitPrice,
  makeSelectCanEdit,
  makeSelectIsFloated,
  makeSelectCompanyTrains,
  makeSelectCompanyTreasury,
} from './selectors';
import Company from './Company';

const RADIX_DECIMAL = 10;

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFloatCompany: () => dispatch(floatCompany(ownProps.companyId)),
  onChangeInitPrice: evt =>
    dispatch(changeInitSharePrice(ownProps.companyId, parseInt(evt.target.value, RADIX_DECIMAL))),
  onChangeName: evt => dispatch(changeCompanyName(ownProps.companyId, evt.target.value)),
  onToggleName: () => dispatch(toggleNameEdit(ownProps.companyId)),
});

const mapStateToProps = () =>
  createStructuredSelector({
    companyName: makeSelectCompanyName(),
    initSharePrice: makeSelectCompanyInitPrice(),
    canEditName: makeSelectCanEdit(),
    isFloated: makeSelectIsFloated(),
    trainIds: makeSelectCompanyTrains(),
    treasury: makeSelectCompanyTreasury(),
  });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Company);
export { mapDispatchToProps };
