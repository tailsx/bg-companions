import React from 'react';
import PropTypes from 'prop-types';

import Edit from './StationEdit';
import ReadOnly from './StationReadOnly';

class Station extends React.PureComponent {
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
    const { type, amount } = this.props;
    const { readOnly } = this.state;

    if (readOnly) {
      return (
        <div>
          <ReadOnly {...{ type, amount }} />
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

export default Station;

Station.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  onTypeChange: PropTypes.func,
  onAmountChange: PropTypes.func,
};
