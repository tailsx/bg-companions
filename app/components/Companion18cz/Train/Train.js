import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/general/Input';

class Train extends React.PureComponent {
  render() {
    const { name, type, lastRan, onNameChange, onTypeChange, onNumberChange } = this.props;

    return (
      <div className="train">
        <Input label="Name" value={name} onChange={onNameChange} />
        <Input label="Type" value={type} onChange={onTypeChange} />
        <Input label="LastRan" value={lastRan} onChange={onNumberChange} />
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
