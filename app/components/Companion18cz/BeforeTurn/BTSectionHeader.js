import React from 'react';
import PropTypes from 'prop-types';

const BTSectionHeader = ({ children }) => <div className="bt-section-header">{children}</div>;

export default BTSectionHeader;

BTSectionHeader.propTypes = {
  children: PropTypes.any,
};
