import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/general/Input';
import TrainComponent from 'components/general/TrainComponent';

const Treasury = ({ treasury, onChangeTreasury }) => (
  <TrainComponent className="treasury">
    <Input label="Treasury" value={treasury} onChange={onChangeTreasury} />
  </TrainComponent>
);

export default Treasury;

Treasury.propTypes = {
  treasury: PropTypes.number,
  onChangeTreasury: PropTypes.func,
};
