import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/general/Input';
import TrainComponent from 'components/general/TrainComponent';
import Button from '../../general/Button/Button';

import './style.scss';

class Train extends React.PureComponent {
  render() {
    const {
      name,
      type,
      lastRan,
      onNameChange,
      onTypeChange,
      onNumberChange,
      onRemoveTrain,
    } = this.props;

    return (
      <TrainComponent className="train">
        <Input label="Name" value={name} onChange={onNameChange} />
        <Input label="Type" value={type} onChange={onTypeChange} />
        <Input label="Last Ran" value={lastRan} onChange={onNumberChange} />
        <Button text="Remove" onButtonClick={onRemoveTrain} />
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
  onRemoveTrain: PropTypes.func,
};
