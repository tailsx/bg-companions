import React from 'react';
import PropTypes from 'prop-types';
import EditableInput from '../../general/EditableInput/EditableInput';
import './style.scss';

const SharePrice = ({ value = '0', onValueChange, onButtonClick }) => (
  <div className="share-price">
    <div className="share-price__input">
      <EditableInput
        canEdit
        label="Share Price"
        onButtonClick={onButtonClick}
        onChange={onValueChange}
        value={value}
      />
    </div>
  </div>
);

export default SharePrice;

SharePrice.propTypes = {
  value: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
