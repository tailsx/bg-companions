import React from 'react';
import PropTypes from 'prop-types';

import ButtonAddPrivate from 'components/Companion18cz/Buttons';
import ButtonAddStation from 'components/Companion18cz/Buttons/ButtonAddStation';
import ButtonAddTrain from 'components/Companion18cz/Buttons/ButtonAddTrain';

import Train from '../Train';
import Private from '../Private';
import Station from '../Station';
import Treasury from '../Treasury';
import BeforeTurnSection from './BeforeTurnSection';

class BeforeTurn extends React.PureComponent {
  render() {
    const { trainsData, privatesData, stationsData, treasuryData } = this.props;
    const { trains, onUpdateTrain, onAddTrain } = trainsData;
    const { privates, onUpdatePrivate, onAddPrivate } = privatesData;
    const { stations, onUpdateStation, onAddStation } = stationsData;
    const { onChangeTreasury } = treasuryData;

    return (
      <div id="before-turn">
        <h1>Before turn</h1>

        <BeforeTurnSection>
          <Treasury
            {...treasuryData}
            onChangeTreasury={e => onChangeTreasury(parseInt(e.target.value, 10))}
          />
        </BeforeTurnSection>
        <BeforeTurnSection>
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
        </BeforeTurnSection>
        <BeforeTurnSection>
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
        </BeforeTurnSection>
        <BeforeTurnSection>
          <ButtonAddStation onButtonClick={onAddStation} />
          {stations &&
            stations.map(({ id, ...stationProps }, index) => (
              <Station
                key={`station-${id}`}
                id={id}
                onTypeChange={e => onUpdateStation('type', index, e.target.value)}
                onAmountChange={e => onUpdateStation('amount', index, parseInt(e.target.value, 10))}
                {...stationProps}
              />
            ))}
        </BeforeTurnSection>
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
