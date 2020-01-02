import React from 'react';
import PropTypes from 'prop-types';

const Treasury = ({ companyId }) => <div>{companyId}money</div>;

export default Treasury;

Treasury.propTypes = {
  companyId: PropTypes.string.isRequired,
};
