import React from 'react';
import PropTypes from 'prop-types';

const PrivateEdit = ({
  revenue,
  marketValue,
  hasAbility,
  onRevenueChange,
  onMarketValueChange,
  onHasAbilityChange,
}) => (
  <div>
    <input className="private-revenue" type="number" value={revenue} onChange={onRevenueChange} />
    <input
      className="private-marketValue"
      type="number"
      value={marketValue}
      onChange={onMarketValueChange}
    />
    <button
      type="button"
      className="private-hasAbility"
      value={hasAbility}
      onClick={onHasAbilityChange}
    >
      {hasAbility ? 'YES' : 'NO'}
    </button>
  </div>
);

export default PrivateEdit;

PrivateEdit.propTypes = {
  revenue: PropTypes.number,
  marketValue: PropTypes.number,
  hasAbility: PropTypes.bool,
  onRevenueChange: PropTypes.func,
  onMarketValueChange: PropTypes.func,
  onHasAbilityChange: PropTypes.func,
};
