import React from 'react';
import PropTYpes from 'prop-types';

const Train = ({ trainId }) => (
  <div>
    {`trainId: ${trainId}`}
    {console.log(`trainId: ${trainId}`)}
  </div>
);

export default Train;

Train.propTypes = {
  trainId: PropTYpes.string,
};
