import React from 'react';
import PropTypes from 'prop-types';

const Treasury = ({ treasury }) => <div className="treasury-amount">{treasury}</div>;

export default Treasury;

Treasury.propTypes = {
  treasury: PropTypes.number,
};
