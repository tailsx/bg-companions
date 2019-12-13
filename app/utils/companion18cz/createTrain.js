import generateId from '../generateId';

const createStation = (name, type, lastRan) => ({
  id: generateId(),
  type,
  name,
  lastRan,
  mods: {},
});

export default createStation;
