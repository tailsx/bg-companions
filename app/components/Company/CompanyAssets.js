import React from 'react';
import PropTypes from 'prop-types';

import Trains from 'containers/Trains';

const CompanyAssets = ({ companyId, trainIds }) => (
  <div>
    {`Comapny ID: ${companyId}`}
    {/*     <Trains {...{ companyId, trainIds }} /> */}
  </div>
);

export default CompanyAssets;

CompanyAssets.propTypes = { companyId: PropTypes.string, trainIds: PropTypes.array };
