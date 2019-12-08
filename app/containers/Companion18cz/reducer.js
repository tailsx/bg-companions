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
} from './constants';

// The initial state of the App
const initialState = {
  trains: [],
  stations: [],
  privates: [],
  treasury: 0,
};

function companion18czReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRAIN:
      return {
        ...state,
        trains: [
          ...state.trains,
          {
            id: action.id,
            type: '',
            name: '',
            lastRan: 0,
          },
        ],
      };
    case ADD_STATION:
      return {
        ...state,
        id: action.id,
        stations: [
          ...state.stations,
          {
            id: action.id,
            type: '',
            amount: 0,
          },
        ],
      };
    case ADD_PRIVATE:
      return {
        ...state,
        id: action.id,
        privates: [
          ...state.privates,
          {
            id: action.id,
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
    default:
      return state;
  }
}

export default companion18czReducer;
