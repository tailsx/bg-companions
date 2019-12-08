/**
 * Generates a 8 character id
 *
 * @return {string} 8 character string for purpose of id
 */
const generateId = (seed = null) => {
  const length = 32;
  const idLength = 8;

  const number = seed
    ? seed % (2 ** length - 1)
    : Math.floor(Math.random() * Math.floor(2 ** length - 1));

  return number
    .toString(36)
    .padEnd(idLength, '0')
    .slice(-1 * idLength);
};

export default generateId;
