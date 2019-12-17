import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/general/Input';

class Station extends React.PureComponent {
  render() {
    const { type, amount, onTypeChange, onAmountChange } = this.props;

    return (
      <div className="station">
        <Input label="Type" value={type} onChange={onTypeChange} />
        <Input label="Amount" value={amount} onChange={onAmountChange} />
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
