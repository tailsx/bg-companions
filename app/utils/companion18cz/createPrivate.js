import generateId from '../generateId';

const createStation = (revenue, marketValue, hasAbility) => ({
  id: generateId(),
  revenue,
  hasAbility,
  marketValue,
});

export default createStation;
