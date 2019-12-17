import React from 'react';
import PropTypes from 'prop-types';

import ButtonAddPrivate from 'components/Companion18cz/Buttons';
import ButtonAddStation from 'components/Companion18cz/Buttons/ButtonAddStation';
import ButtonAddTrain from 'components/Companion18cz/Buttons/ButtonAddTrain';

import Train from '../Train';
import Private from '../Private';
import Station from '../Station';
import Treasury from '../Treasury';

// eslint-disable-next-line arrow-body-style
class BeforeTurn extends React.PureComponent {
  // const { trains } = props;

  render() {
    const { trainsData, privatesData, stationsData, treasuryData } = this.props;
    const { trains, onUpdateTrain, onAddTrain } = trainsData;
    const { privates, onUpdatePrivate, onAddPrivate } = privatesData;
    const { stations, onUpdateStation, onAddStation } = stationsData;
    const { treasury, onChangeTreasury } = treasuryData;

    return (
      <div id="before-turn">
        <h1>Before turn</h1>
        <div className="treasury">
          <label htmlFor="bt-treasury">
            Treasury:
            <input
              id="bt-treasury"
              name="bt-treasury"
              type="number"
              onChange={onChangeTreasury}
              value={treasury}
            />
          </label>
        </div>

        <div>
          <ButtonAddTrain onButtonClick={onAddTrain} />
          {trains &&
            trains.map(({ id, ...trainProps }, index) => (
              <Train
                key={`train-${id}`}
                onNameChange={e => onUpdateTrain('name', index, e.target.value)}
                onTypeChange={e => onUpdateTrain('type', index, e.target.value)}
                onNumberChange={e => onUpdateTrain('lastRan', index, parseInt(e.target.value, 10))}
                id={id}
                {...trainProps}
              />
            ))}
        </div>
        <div>
          <ButtonAddPrivate onButtonClick={onAddPrivate} />
          {privates &&
            privates.map(({ id, ...privateProps }, index) => (
              <Private
                key={`private-${id}`}
                onRevenueChange={e => onUpdatePrivate('revenue', index, e.target.value)}
                onMarketValueChange={e => onUpdatePrivate('marketValue', index, e.target.value)}
                onHasAbilityChange={e =>
                  onUpdatePrivate('hasAbility', index, e.target.value !== 'true')
                }
                id={id}
                {...privateProps}
              />
            ))}
        </div>
        <div>
          <ButtonAddStation onButtonClick={onAddStation} />
          {stations &&
            stations.map(({ id, ...stationProps }, index) => (
              <Station
                key={`station-${id}`}
                id={id}
                onTypeChange={e => onUpdateStation('type', index, e.target.value)}
                onAmountChange={e => onUpdateStation('amount', index, e.target.value)}
                {...stationProps}
              />
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
  treasuryData: PropTypes.object,
};

export default BeforeTurn;
