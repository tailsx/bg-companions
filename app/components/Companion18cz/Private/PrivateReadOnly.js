import React from 'react';
import PropTypes from 'prop-types';

const PrivateReadOnly = ({ revenue, marketValue, hasAbility }) => (
  <div>
    <span className="private-revenue">{revenue}</span>
    <span className="private-marketValue">{marketValue}</span>
    <span className="private-hasAbility">{hasAbility}</span>
  </div>
);

export default PrivateReadOnly;

PrivateReadOnly.propTypes = {
  revenue: PropTypes.number,
  marketValue: PropTypes.number,
  hasAbility: PropTypes.bool,
};
