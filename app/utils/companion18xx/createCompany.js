import generateId from '../generateId';
import generateColour from '../generateColour';

const createCompany = (name = 'Train Company', colour = null) => ({
  id: generateId(),
  name,
  colour: colour || generateColour(),
});

export default createCompany;
