import React from 'react';
import PropTypes from 'prop-types';

class Private extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      readOnly: false,
    };
  }

  toggleReadOnly() {
    this.setState(state => ({ readOnly: !state.readOnly }));
  }

  render() {
    const {
      revenue,
      hasAbility,
      marketValue,
      onMarketValueChange,
      onHasAbilityChange,
      onRevenueChange,
    } = this.props;
    const { readOnly } = this.state;

    if (readOnly) {
      return (
        <div>
          <span className="private-revenue">{revenue}</span>
          <span className="private-marketValue">{marketValue}</span>
          <span className="private-hasAbility">{hasAbility}</span>
        </div>
      );
    }

    return (
      <div>
        <input
          className="private-revenue"
          type="number"
          value={revenue}
          onChange={onRevenueChange}
        />
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
          onChange={onHasAbilityChange}
        >
          {hasAbility ? 'YES' : 'NO'}
        </button>
        <button type="button" onClick={() => this.toggleReadOnly()}>
          Done
        </button>
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
