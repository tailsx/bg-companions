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
} from './constants';

// The initial state of the App
const initialState = {
  trains: [],
  stations: [],
  privates: [],
  treasury: 0,
  turn: [],
};

function companion18czReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRAIN:
      return {
        ...state,
        trains: [
          ...state.trains,
          {
            id: generateId(),
            type: '',
            name: '',
            lastRan: 0,
          },
        ],
      };
    case ADD_STATION:
      return {
        ...state,
        stations: [
          ...state.stations,
          {
            id: generateId(),
            type: '',
            amount: 0,
          },
        ],
      };
    case ADD_PRIVATE:
      return {
        ...state,
        privates: [
          ...state.privates,
          {
            id: generateId(),
            revenue: 0,
            hasAbility: false,
            marketValue: 0,
          },
        ],
      };
    case REMOVE_TRAIN:
      return {
        ...state,
        trains: state.trains.reduce(
          (accum, train, index) => (index === action.index ? accum : [...accum, train]),
          [],
        ),
      };
    case REMOVE_STATION:
      return {
        ...state,
        stations: state.stations.reduce(
          (accum, station, index) => (index === action.index ? accum : [...accum, station]),
          [],
        ),
      };
    case REMOVE_PRIVATE:
      return {
        ...state,
        privates: state.privates.reduce(
          (accum, priv, index) => (index === action.index ? accum : [...accum, priv]),
          [],
        ),
      };
    case UPDATE_TRAIN:
      return {
        ...state,
        trains: state.trains.reduce((accum, train, index) => {
          let t = train;
          if (index === action.train.index) {
            t = { ...train };
            t[action.train.attr] = action.train.value;
          }
          return [...accum, t];
        }, []),
      };
    case UPDATE_STATION:
      return {
        ...state,
        stations: state.stations.reduce((accum, station, index) => {
          let s = station;
          if (index === action.station.index) {
            s = { ...station };
            s[action.station.attr] = action.station.value;
          }
          return [...accum, s];
        }, []),
      };
    case UPDATE_PRIVATE:
      return {
        ...state,
        privates: state.privates.reduce((accum, priv, index) => {
          let p = priv;
          if (index === action.priv.index) {
            p = { ...priv };
            p[action.priv.attr] = action.priv.value;
          }
          return [...accum, p];
        }, []),
      };
    case CHANGE_TREASURY:
      return {
        ...state,
        treasury: action.value,
      };
    case CHANGE_TURN_STATION:
      return {
        ...state,
        stations: state.stations.reduce(
          (accum, station) =>
            station.id === action.mod.id
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
      };
    default:
      return state;
  }
}

export default companion18czReducer;
