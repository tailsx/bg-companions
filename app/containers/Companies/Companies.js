import React from 'react';
import PropTypes from 'prop-types';

import Company from 'components/Company';

const Companies = ({ companies, onChangeCompanyName, onCreateCompany }) => {
  return (
    <div>
      <button type="button" onClick={onCreateCompany}>
        Create Company
      </button>
      {companies.map(company => (
        <Company
          key={`comp-${company.companyId}`}
          {...company}
          onNameChange={onChangeCompanyName}
        />
      ))}
    </div>
  );
};

export default Companies;

Companies.propTypes = {
  onCreateCompany: PropTypes.func,
  companies: PropTypes.array,
};
