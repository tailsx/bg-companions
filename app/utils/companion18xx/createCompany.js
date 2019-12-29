import generateId from '../generateId';

const createCompany = () => ({
  id: generateId(),
  name: 'Train Company',
});

export default createCompany;
