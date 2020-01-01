import React from 'react';
import PropTypes from 'prop-types';
import Trains from 'containers/Trains';

const Company = ({ companyId, companyName, onNameChange, trainIds }) => (
  <div>
    {`Comapny ID: ${companyId}`}
    {`Comapny Name: ${companyName}`}
    <Trains {...{ companyId, trainIds }} />
    <input type="text" onChange={evt => onNameChange(companyId, evt.target.value)} />
  </div>
);

export default Company;

Company.propTypes = {
  companyId: PropTypes.string,
  trainIds: PropTypes.array,
};
