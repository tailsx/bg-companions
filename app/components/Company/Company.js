import React from 'react';
import PropTypes from 'prop-types';
import Trains from 'containers/Trains';

const Company = ({ companyId, companyName, trainIds }) => (
  <div>
    {`Comapny ID: ${companyId}`}
    {`Comapny Name: ${companyName}`}
    <Trains {...{ companyId, trainIds }} />
  </div>
);

export default Company;

Company.propTypes = {
  companyId: PropTypes.string,
  trainIds: PropTypes.array,
};
