import React from 'react';
import PropTypes from 'prop-types';
import Train from 'components/Train';

const Companies = ({ trains, onCreateTrain }) => {
  return (
    <div>
      <button type="button" onClick={onCreateTrain}>
        Create Train
      </button>
      {trains.map(train => (
        <Train key={train.trainId} {...train} />
      ))}
    </div>
  );
};

export default Companies;

Companies.propTypes = {};
