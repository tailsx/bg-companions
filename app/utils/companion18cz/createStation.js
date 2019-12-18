import generateId from '../generateId';

const createStation = (type, amount) => ({
  id: generateId(),
  type,
  amount,
});

export default createStation;
