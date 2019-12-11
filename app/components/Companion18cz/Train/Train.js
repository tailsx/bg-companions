import React from 'react';
import PropTypes from 'prop-types';

import Edit from './TrainEdit';
import ReadOnly from './TrainReadOnly';

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
    const { name, type, lastRan } = this.props;
    const { readOnly } = this.state;

    if (readOnly) {
      return (
        <div>
          <ReadOnly {...{ type, name, lastRan }} />
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

export default Train;

Train.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  lastRan: PropTypes.number,
  onNameChange: PropTypes.func,
  onTypeChange: PropTypes.func,
  onNumberChange: PropTypes.func,
};
