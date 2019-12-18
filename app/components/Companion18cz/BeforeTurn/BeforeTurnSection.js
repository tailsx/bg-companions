import React from 'react';
import PropTypes from 'prop-types';

const BeforeTurnSection = ({ Element = 'div', children, ...rest }) => (
  <Element className="before-turn-section" {...rest}>
    {children}
  </Element>
);

export default BeforeTurnSection;

BeforeTurnSection.propTypes = {
  Element: PropTypes.elementType,
  children: PropTypes.any,
};
