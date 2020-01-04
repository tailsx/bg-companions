import React from 'react';
import PropTypes from 'prop-types';

import Company from 'containers/Company';
import './style.scss';

const Companies = ({ companies, onRun, onCreateCompany }) => {
  return (
    <div className="companies">
      <button type="button" onClick={onCreateCompany}>
        Create Company
      </button>
      <button type="button" onClick={onRun}>
        run it
      </button>
      <div className="company-wrapper">
        {companies.map(company => (
          <Company key={`comp-${company.companyId}`} companyId={company.companyId} />
        ))}
      </div>
    </div>
  );
};

export default Companies;

Companies.propTypes = {
  onCreateCompany: PropTypes.func,
  companies: PropTypes.array,
};
