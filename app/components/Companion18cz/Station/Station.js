import React from 'react';
import PropTypes from 'prop-types';

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
    const { type, amount, onNumberChange, onTypeChange } = this.props;
    const { readOnly } = this.state;
    if (readOnly) {
      return (
        <div>
          <span className="station-type">{type}</span>
          <span className="station-amount">{amount}</span>{' '}
          <button type="button" onClick={() => this.toggleReadOnly()}>
            EDIT
          </button>
        </div>
      );
    }

    return (
      <div>
        <input className="station-type" type="text" value={type} onChange={onTypeChange} />
        <input className="station-amount" type="number" value={amount} onChange={onNumberChange} />
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
  onNumberChange: PropTypes.func,
};
