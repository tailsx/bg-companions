import React from 'react';
import PropTypes from 'prop-types';

import BeforeTurn from 'components/Companion18cz/BeforeTurn';
import TurnTrackLay from '../../components/Companion18cz/TurnTrackLay';

export default class Companion18cz extends React.PureComponent {
  render() {
    const {
      onChangeTreasury,
      onAddPrivate,
      onAddStation,
      onAddTrain,
      onUpdateTrain,
      onRemoveTrain,
      treasury,
      privates,
      trains,
      stations,
    } = this.props;

    const beforeProps = {
      trainsData: { trains, onAddTrain, onUpdateTrain, onRemoveTrain },
      privatesData: { privates, onAddPrivate },
      stationsData: { stations, onAddStation },
      treasury,
    };

    return (
      <div>
        <h1>18CZ Companion</h1>
        <input type="number" onChange={onChangeTreasury} value={treasury} />
        <p>{treasury}</p>
        <button type="button" onClick={onAddPrivate}>
          Private
        </button>
        <button type="button" onClick={onAddStation}>
          Station
        </button>
        <button type="button" onClick={onAddTrain}>
          Train
        </button>
        <BeforeTurn {...beforeProps} />
        <TurnTrackLay />
      </div>
    );
  }
}

Companion18cz.propTypes = {
  onChangeTreasury: PropTypes.func,
  onAddPrivate: PropTypes.func,
  onAddStation: PropTypes.func,
  onAddTrain: PropTypes.func,
  onUpdateTrain: PropTypes.func,
  onRemoveTrain: PropTypes.func,
  treasury: PropTypes.number,
  privates: PropTypes.array,
  stations: PropTypes.array,
  trains: PropTypes.array,
};
