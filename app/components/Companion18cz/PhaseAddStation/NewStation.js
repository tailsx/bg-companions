import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/general/Input';

const NewStation = ({ amount, onAmountChange }) => (
  <div>
    <Input label="More Stations" value={amount} onChange={onAmountChange} />
  </div>
);
export default NewStation;

NewStation.propTypes = {
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func,
};
