import React from 'react';
import PropTypes from 'prop-types';

import Treasury from 'components/Treasury';
import Trains from 'containers/Trains';

import './style.scss';

const CompanyAssets = ({ companyId, trainIds, treasury }) => (
  <div className="company-assets">
    <div className="company-assets__section">
      <Treasury companyId={companyId} treasury={treasury} />
    </div>
    <div className="company-assets__section">
      <div className="company-assets__section company-assets__trains">
        <span>Trains</span>
        <Trains companyId={companyId} trainIds={trainIds} />
      </div>
    </div>
  </div>
);

export default CompanyAssets;

CompanyAssets.propTypes = {
  companyId: PropTypes.string,
  trainIds: PropTypes.array,
  treasury: PropTypes.number,
};
