import generateId from '../generateId';

const createStation = (revenue, marketValue, hasAbility) => ({
  id: generateId(),
  revenue,
  hasAbility,
  marketValue,
  mods: {},
});

export default createStation;
