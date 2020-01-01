import React from 'react';
import PropTYpes from 'prop-types';

const Train = ({ trainId, trainName }) => (
  <div>
    {`trainName: ${trainName}`}
    {console.log(`trainId: ${trainId}`)}
  </div>
);

export default Train;

Train.propTypes = {
  trainId: PropTYpes.string,
};
