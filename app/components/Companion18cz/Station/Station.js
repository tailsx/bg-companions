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
    const { type, amount, onAmountChange, onTypeChange } = this.props;
    const { readOnly } = this.state;
    let props = { type, amount };
    if (readOnly) {
      return (
        <div>
          <ReadOnly {...props} />
          <button type="button" onClick={() => this.toggleReadOnly()}>
            EDIT
          </button>
        </div>
      );
    }

    props = { ...props, onAmountChange, onTypeChange };
    return (
      <div>
        <Edit {...props} />
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
