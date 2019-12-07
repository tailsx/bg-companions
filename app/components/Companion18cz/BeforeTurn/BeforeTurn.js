import React from 'react';
import PropTypes from 'prop-types';
import Train from '../Train';
import Private from '../Private';
import Station from '../Station';
import Treasury from '../Treasury';

// eslint-disable-next-line arrow-body-style
class BeforeTurn extends React.PureComponent {
  // const { trains } = props;

  render() {
    const { trainsData, privatesData, stationsData, treasury } = this.props;
    const { trains, onUpdateTrain } = trainsData;
    const { privates } = privatesData;
    const { stations } = stationsData;

    return (
      <div id="before-turn">
        <h1>Before turn</h1>
        <div>
          {trains &&
            trains.map(({ id, ...trainProps }, index) => (
              <Train
                key={`train-${id}`}
                onNameChange={e => onUpdateTrain('name', index, e.target.value)}
                onTypeChange={e => onUpdateTrain('type', index, e.target.value)}
                onNumberChange={e => onUpdateTrain('number', index, e.target.value)}
                id={id}
                {...trainProps}
              />
            ))}
        </div>
        <div>
          {privates &&
            privates.map(({ id, ...privateProps }) => (
              <Private key={`private-${id}`} id={id} {...privateProps} />
            ))}
        </div>
        <div>
          {stations &&
            stations.map(({ id, ...stationProps }) => (
              <Station key={`station-${id}`} id={id} {...stationProps} />
            ))}
        </div>
        {treasury && (
          <div>
            <Treasury treasury={treasury} />
          </div>
        )}
      </div>
    );
  }
}

BeforeTurn.propTypes = {
  trainsData: PropTypes.object,
  privatesData: PropTypes.object,
  stationsData: PropTypes.object,
  treasury: PropTypes.number,
};

export default BeforeTurn;
