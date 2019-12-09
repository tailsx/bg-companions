import React from 'react';
import PropTypes from 'prop-types';

class Train extends React.PureComponent {
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
    const { name, type, lastRan, onNameChange, onTypeChange, onNumberChange } = this.props;
    const { readOnly } = this.state;

    if (readOnly) {
      return (
        <div>
          <span className="train-name">{name}</span>
          <span className="train-type">{type}</span>
          <span className="train-lastRan">{lastRan}</span>
          <button type="button" onClick={() => this.toggleReadOnly()}>
            EDIT
          </button>
        </div>
      );
    }

    return (
      <div>
        <input className="train-name" type="text" value={name} onChange={onNameChange} />
        <input className="train-type" type="text" value={type} onChange={onTypeChange} />
        <input className="train-lastRan" type="number" value={lastRan} onChange={onNumberChange} />
        <button type="button" onClick={() => this.toggleReadOnly()}>
          Done
        </button>
      </div>
    );
  }
}

export default Train;

Train.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  lastRan: PropTypes.number,
  onNameChange: PropTypes.func,
  onTypeChange: PropTypes.func,
  onNumberChange: PropTypes.func,
};
