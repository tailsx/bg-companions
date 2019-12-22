import React from 'react';
import PropTypes from 'prop-types';

const BTSectionBody = ({ children }) => <div className="bt-section-body">{children}</div>;

export default BTSectionBody;

BTSectionBody.propTypes = {
  children: PropTypes.any,
};
