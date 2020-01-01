import React from 'react';
import Trains from 'containers/Trains';

const Company = ({ companyId }) => (
  <div>
    {`Comapny ID: ${companyId}`}
    <Trains companyId={companyId} />
  </div>
);

export default Company;
