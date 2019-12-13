import generateId from '../generateId';

const createStation = (type, amount) => ({
  id: generateId(),
  type,
  amount,
  mods: {},
});

export default createStation;
