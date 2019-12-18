import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/general/Input';
import TrainComponent from 'components/general/TrainComponent';

class Station extends React.PureComponent {
  render() {
    const { type, amount, onTypeChange, onAmountChange } = this.props;

    return (
      <TrainComponent className="station">
        <Input label="Type" value={type} onChange={onTypeChange} />
        <Input label="Amount" value={amount} onChange={onAmountChange} />
      </TrainComponent>
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
