import React from 'react';
import Trains from 'containers/Trains';

const Company = ({ companyId, trainIds }) => (
  <div>
    {`Comapny ID: ${companyId}`}
    <Trains {...{ companyId, trainIds }} />
  </div>
);

export default Company;
