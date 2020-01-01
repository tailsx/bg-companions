import React from 'react';
import PropTypes from 'prop-types';

import Company from 'containers/Company';

const Companies = ({ companies, onCreateCompany }) => {
  return (
    <div>
      <button type="button" onClick={onCreateCompany}>
        Create Company
      </button>
      {companies.map(company => (
        <Company key={`comp-${company.companyId}`} companyId={company.companyId} />
      ))}
    </div>
  );
};

export default Companies;

Companies.propTypes = {
  onCreateCompany: PropTypes.func,
  companies: PropTypes.array,
};
