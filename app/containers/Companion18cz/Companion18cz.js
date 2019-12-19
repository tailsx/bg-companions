import React from 'react';
import PropTypes from 'prop-types';

import BeforeTurn from 'components/Companion18cz/BeforeTurn';
import PhaseTrackLay from 'components/Companion18cz/PhaseTrackLay';
import PhaseAddStation from 'components/Companion18cz/PhaseAddStation';
import PhaseOperating from 'components/Companion18cz/PhaseOperating';
import PhaseAcquistion from 'components/Companion18cz/PhaseAcquistion';
import PhaseTrainPurchase from 'components/Companion18cz/PhaseTrainPurchase';

export default class Companion18cz extends React.PureComponent {
  render() {
    const {
      onChangeTreasury,
      onAddPrivate,
      onAddStation,
      onAddTrain,
      onUpdatePrivate,
      onUpdateStation,
      onUpdateTrain,
      onRemovePrivate,
      onRemoveStation,
      onRemoveTrain,
      onChangeStation,
      onTurnTrains,
      treasury,
      privates,
      trains,
      stations,
      stocks,
      turnStations,
      turnTrains,
      onChangeAquisitionStock,
      onChangeAquisitionPrice,
    } = this.props;

    const beforeProps = {
      trainsData: { trains, onAddTrain, onUpdateTrain, onRemoveTrain },
      privatesData: {
        privates,
        onUpdatePrivate,
        onRemovePrivate,
        onAddPrivate,
      },
      stationsData: { stations, onUpdateStation, onRemoveStation, onAddStation },
      treasuryData: { onChangeTreasury, treasury },
    };

    return (
      <div>
        <h1>18CZ Companion</h1>
        <BeforeTurn {...beforeProps} />
        <PhaseTrackLay />
        <PhaseAddStation {...{ stations, turnStations, onChangeStation }} />
        <PhaseOperating {...{ trains }} />
        <PhaseAcquistion
          {...{ treasury, stocks, onChangeAquisitionStock, onChangeAquisitionPrice }}
        />
        <PhaseTrainPurchase {...{ trains, turnTrains, onTurnTrains }} />
      </div>
    );
  }
}

Companion18cz.propTypes = {
  onChangeTreasury: PropTypes.func,
  onAddPrivate: PropTypes.func,
  onAddStation: PropTypes.func,
  onAddTrain: PropTypes.func,
  onUpdatePrivate: PropTypes.func,
  onUpdateStation: PropTypes.func,
  onUpdateTrain: PropTypes.func,
  onRemovePrivate: PropTypes.func,
  onRemoveStation: PropTypes.func,
  onRemoveTrain: PropTypes.func,
  onChangeStation: PropTypes.func,
  onChangeAquisitionStock: PropTypes.func,
  onChangeAquisitionPrice: PropTypes.func,
  onTurnTrains: PropTypes.func,

  treasury: PropTypes.number,
  privates: PropTypes.array,
  stations: PropTypes.array,
  trains: PropTypes.array,
  turnStations: PropTypes.object,
  turnTrains: PropTypes.object,
  stocks: PropTypes.shape({
    number: PropTypes.number,
    price: PropTypes.number,
  }),
};
