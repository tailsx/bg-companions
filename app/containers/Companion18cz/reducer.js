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
  CHANGE_TURN_STATION,
  CHANGE_TURN_TRAINS,
} from './constants';

// The initial state of the App
const initialState = {
  before: {},
  turn: {},
  after: {},
};

// Helper functions
const helperAddTrain = state => {
  const train = {
    id: generateId(),
    type: '',
    name: '',
    lastRan: 0,
  };
  const turn = { [train.id]: { amount: 0 } };
  const trains = state.before && state.before.trains ? [...state.before.trains, train] : [train];
  const mods = state.turn && state.turn.trains ? { ...state.turn.trains, ...turn } : { ...turn };
  return {
    ...state,
    before: {
      ...state.before,
      trains,
    },
    turn: {
      ...state.turn,
      trains: mods,
    },
  };
};
const helperAddStation = state => {
  const station = {
    id: generateId(),
    type: '',
    amount: 0,
  };
  const turn = { [station.id]: { amount: 0 } };
  const stations =
    state.before && state.before.stations ? [...state.before.stations, station] : [station];
  const mods =
    state.turn && state.turn.stations ? { ...state.turn.stations, ...turn } : { ...turn };

  return {
    ...state,
    before: {
      ...state.before,
      stations,
    },
    turn: {
      ...state.turn,
      stations: mods,
    },
  };
};
const helperAddPrivate = state => {
  const priv = {
    id: generateId(),
    revenue: 0,
    hasAbility: false,
    marketValue: 0,
  };
  const privates =
    state.before && state.before.privates ? [...state.before.privates, priv] : [priv];

  return {
    ...state,
    before: {
      ...state.before,
      privates,
    },
  };
};
const helperTurnStations = (state, { stationId, value }) => {
  const stations = state.turn &&
    state.turn.stations && {
      ...state.turn.stations,
      [stationId]: value,
    };

  return {
    ...state,
    turn: {
      ...state.turn,
      stations,
    },
  };
};
const helperTurnTrains = (state, { trainId, value }) => {
  const trains = state.turn &&
    state.turn.trains && {
      ...state.turn.trains,
      [trainId]: value,
    };

  return {
    ...state,
    turn: {
      ...state.turn,
      trains,
    },
  };
};

// Reducer
function companion18czReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRAIN:
      return { ...helperAddTrain(state) };
    case ADD_STATION:
      return { ...helperAddStation(state) };
    case ADD_PRIVATE:
      return { ...helperAddPrivate(state) };
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
    case CHANGE_TURN_STATION:
      return { ...helperTurnStations(state, action.mod) };
    case CHANGE_TURN_TRAINS:
      return { ...helperTurnTrains(state, action.mod) };
    default:
      return state;
  }
}

export default companion18czReducer;
