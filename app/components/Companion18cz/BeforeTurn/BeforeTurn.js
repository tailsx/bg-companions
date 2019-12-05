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
    const { trains, privates, stations, treasury } = this.props;
    return (
      <div id="before-turn">
        <h1>Before turn</h1>
        <div>
          {trains &&
            trains.map(({ name, type, lastRan }) => (
              <Train key={`train-${name}`} name={name} type={type} lastRan={lastRan} />
            ))}
        </div>
        <div>
          {privates &&
            privates.map(({ revenue, marketValue, hasAbility }) => (
              <Private
                key={`private-${revenue}`}
                revenue={revenue}
                marketValue={marketValue}
                hasAbility={hasAbility}
              />
            ))}
        </div>
        <div>
          {stations &&
            stations.map(({ type, amount }) => (
              <Station key={`station-${type}`} type={type} amount={amount} />
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
  trains: PropTypes.array,
  privates: PropTypes.array,
  stations: PropTypes.array,
  treasury: PropTypes.number,
};

export default BeforeTurn;
