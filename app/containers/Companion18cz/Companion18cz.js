import React from 'react';
import PropTypes from 'prop-types';

import BeforeTurn from 'components/Companion18cz/BeforeTurn';
import TurnTrackLay from '../../components/Companion18cz/TurnTrackLay';

export default class Companion18cz extends React.PureComponent {
  render() {
    const { onChangeTreasury, onAddPrivate, onAddStation, onAddTrain, treasury } = this.props;

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
        <BeforeTurn />
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
  treasury: PropTypes.number,
};
