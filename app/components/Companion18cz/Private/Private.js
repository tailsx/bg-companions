import React from 'react';
import PropTypes from 'prop-types';

const Private = ({ revenue, hasAbility, marketValue }) => (
  <div>
    <span className="private-revenue">{revenue}</span>
    <span className="private-marketValue">{marketValue}</span>
    <span className="private-hasAbility">{hasAbility}</span>
  </div>
);

export default Private;

Private.propTypes = {
  revenue: PropTypes.number,
  marketValue: PropTypes.number,
  hasAbility: PropTypes.bool,
};
