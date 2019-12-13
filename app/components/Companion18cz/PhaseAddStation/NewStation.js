import React from 'react';
import PropTypes from 'prop-types';

const NewStation = ({ id, amount, mods, onAmountChange }) => {
  const modAmount = mods && mods.amount ? mods.amount : amount;

  return (
    <div>
      <input
        className={`station-add station-${id}`}
        type="number"
        value={modAmount}
        onChange={evt => onAmountChange(id, evt.target.value)}
      />
    </div>
  );
};

export default NewStation;

NewStation.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  mods: PropTypes.shape({
    amount: PropTypes.number,
  }),
  onAmountChange: PropTypes.func,
};
