import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/general/Input';

class Private extends React.PureComponent {
  render() {
    const {
      revenue,
      hasAbility,
      marketValue,
      onRevenueChange,
      onMarketValueChange,
      onHasAbilityChange,
    } = this.props;

    return (
      <div className="private">
        <Input label="Name" value={revenue} onChange={onRevenueChange} />
        <Input label="Type" value={marketValue} onChange={onMarketValueChange} />
        <Input label="LastRan" value={hasAbility} onChange={onHasAbilityChange} />
      </div>
    );
  }
}

export default Private;

Private.propTypes = {
  revenue: PropTypes.number,
  marketValue: PropTypes.number,
  hasAbility: PropTypes.bool,
  onRevenueChange: PropTypes.func,
  onMarketValueChange: PropTypes.func,
  onHasAbilityChange: PropTypes.func,
};
