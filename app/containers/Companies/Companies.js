import React from 'react';
import PropTypes from 'prop-types';

import Company from 'containers/Company';
import GenericButton from 'components/general/Button/GenericButton/GenericButton';
import './style.scss';

const Companies = ({ companies, onRun, onCreateCompany }) => (
  <div className="companies">
    <div className="companies__buttons">
      <div className="companies__button">
        <GenericButton buttonText="Create Company" onClick={onCreateCompany} />
      </div>
      <div className="companies__button">
        <GenericButton onClick={onRun} buttonText="Simulate Turn" />
      </div>
    </div>
    <div className="company-wrapper">
      {companies.map(company => (
        <Company key={`comp-${company.companyId}`} companyId={company.companyId} />
      ))}
    </div>
  </div>
);

export default Companies;

Companies.propTypes = {
  onCreateCompany: PropTypes.func,
  onRun: PropTypes.func,
  companies: PropTypes.array,
};
