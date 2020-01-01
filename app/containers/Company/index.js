import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCompanyName } from './selectors';
import Company from './Company';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = () =>
  createStructuredSelector({
    companyName: makeSelectCompanyName(),
  });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Company);
export { mapDispatchToProps };
