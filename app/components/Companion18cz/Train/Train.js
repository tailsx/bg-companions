import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/general/Input';
import TrainComponent from 'components/general/TrainComponent';

class Train extends React.PureComponent {
  render() {
    const { name, type, lastRan, onNameChange, onTypeChange, onNumberChange } = this.props;

    return (
      <TrainComponent className="train">
        <Input label="Name" value={name} onChange={onNameChange} />
        <Input label="Type" value={type} onChange={onTypeChange} />
        <Input label="Last Ran" value={lastRan} onChange={onNumberChange} />
      </TrainComponent>
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
