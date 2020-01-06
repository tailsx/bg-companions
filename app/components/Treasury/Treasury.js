import React from 'react';
import PropTypes from 'prop-types';

const Treasury = ({ companyId, treasury }) => (
  <div>
    {companyId} {treasury}
  </div>
);

export default Treasury;

Treasury.propTypes = {
  companyId: PropTypes.string.isRequired,
  treasury: PropTypes.number.isRequired,
};
