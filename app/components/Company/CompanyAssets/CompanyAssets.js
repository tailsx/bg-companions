import React from 'react';
import PropTypes from 'prop-types';

import Trains from 'containers/Trains';

import './style.scss';

const CompanyAssets = ({ companyId, trainIds }) => (
  <div className="company-assets">
    <div className="company-assets__text">{`Comapny ID: ${companyId}`}</div>

    <div className="company-assets__trains">
      <span>Trains</span>
      <Trains companyId={companyId} trainIds={trainIds} />
    </div>
  </div>
);

export default CompanyAssets;

CompanyAssets.propTypes = { companyId: PropTypes.string, trainIds: PropTypes.array };
