import React from 'react';
import PropTypes from 'prop-types';

const BTSection = ({ Element = 'div', children, className="", ...rest }) => (
  <Element className={`${className} bt-section`} {...rest}>
    {children}
  </Element>
);

export default BTSection;

BTSection.propTypes = {
  Element: PropTypes.elementType,
  children: PropTypes.any,
  className: PropTypes.string,
};
