import React from 'react';
import PropTypes from 'prop-types';
import Edit from './PrivateEdit';
import ReadOnly from './PrivateReadOnly';

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
    const { revenue, hasAbility, marketValue } = this.props;
    const { readOnly } = this.state;

    if (readOnly) {
      return (
        <div>
          <ReadOnly {...{ revenue, hasAbility, marketValue }} />
          <button type="button" onClick={() => this.toggleReadOnly()}>
            EDIT
          </button>
        </div>
      );
    }

    return (
      <div>
        <Edit {...this.props} />
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
