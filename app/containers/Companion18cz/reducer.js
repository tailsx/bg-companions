import generateId from '../../utils/generateId';
import {
  ADD_PRIVATE,
  ADD_TRAIN,
  ADD_STATION,
  UPDATE_STATION,
  UPDATE_TRAIN,
  REMOVE_STATION,
  REMOVE_TRAIN,
  CHANGE_TREASURY,
  REMOVE_PRIVATE,
  UPDATE_PRIVATE,
  // CHANGE_TURN_STATION,
} from './constants';

// The initial state of the App
const initialState = {
  before: {},
  turn: {},
  after: {},
};

const helperAddTrain = oldTrains => {
  const train = {
    id: generateId(),
    type: '',
    name: '',
    lastRan: 0,
  };
  return oldTrains ? [...oldTrains, train] : [train];
};
const helperAddStation = oldStations => {
  const station = {
    id: generateId(),
    type: '',
    amount: 0,
  };
  return oldStations ? [...oldStations, station] : [station];
};
const helperAddPrivate = oldPrivates => {
  const priv = {
    id: generateId(),
    revenue: 0,
    hasAbility: false,
    marketValue: 0,
  };
  return oldPrivates ? [...oldPrivates, priv] : [priv];
};

function companion18czReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRAIN:
      return {
        ...state,
        before: {
          ...state.before,
          trains: helperAddTrain(state.before.trains),
        },
      };
    case ADD_STATION:
      return {
        ...state,
        before: {
          ...state.before,
          stations: helperAddStation(state.before.stations),
        },
      };
    case ADD_PRIVATE:
      return {
        ...state,
        before: {
          ...state.before,
          privates: helperAddPrivate(state.before.privates),
        },
      };
    case REMOVE_TRAIN:
      return {
        ...state,
        before: {
          ...state.before,
          trains: state.before.trains.reduce(
            (accum, train, index) => (index === action.index ? accum : [...accum, train]),
            [],
          ),
        },
      };
    case REMOVE_STATION:
      return {
        ...state,
        before: {
          ...state.before,
          stations: state.before.stations.reduce(
            (accum, station, index) => (index === action.index ? accum : [...accum, station]),
            [],
          ),
        },
      };
    case REMOVE_PRIVATE:
      return {
        ...state,
        before: {
          ...state.before,
          privates: state.before.privates.reduce(
            (accum, priv, index) => (index === action.index ? accum : [...accum, priv]),
            [],
          ),
        },
      };
    case UPDATE_TRAIN:
      return {
        ...state,
        before: {
          ...state.before,
          trains: state.before.trains.reduce((accum, train, index) => {
            let t = train;
            if (index === action.train.index) {
              t = { ...train };
              t[action.train.attr] = action.train.value;
            }
            return [...accum, t];
          }, []),
        },
      };
    case UPDATE_STATION:
      return {
        ...state,
        before: {
          ...state.before,
          stations: state.before.stations.reduce((accum, station, index) => {
            let s = station;
            if (index === action.station.index) {
              s = { ...station };
              s[action.station.attr] = action.station.value;
            }
            return [...accum, s];
          }, []),
        },
      };
    case UPDATE_PRIVATE:
      return {
        ...state,
        before: {
          ...state.before,
          privates: state.before.privates.reduce((accum, priv, index) => {
            let p = priv;
            if (index === action.priv.index) {
              p = { ...priv };
              p[action.priv.attr] = action.priv.value;
            }
            return [...accum, p];
          }, []),
        },
      };
    case CHANGE_TREASURY:
      return {
        ...state,
        before: {
          ...state.before,
          treasury: action.value,
        },
      };
    /*     case CHANGE_TURN_STATION:
      return {
        ...state,
        stations: state.stations.reduce(
          (accum, station) =>
            station.id === action.mod.stationId
              ? [
                  ...accum,
                  {
                    ...station,
                    mods: {
                      ...station.mods,
                      amount: action.mod.value,
                    },
                  },
                ]
              : [...accum, station],
          [],
        ),
      }; */
    default:
      return state;
  }
}

export default companion18czReducer;
