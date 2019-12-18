import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/general/Input';
import TrainComponent from 'components/general/TrainComponent';

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
      <TrainComponent className="private">
        <Input label="Revenue" value={revenue} onChange={onRevenueChange} />
        <Input label="Market Value" value={marketValue} onChange={onMarketValueChange} />
        <Input label="Ability" value={hasAbility} onChange={onHasAbilityChange} />
      </TrainComponent>
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
