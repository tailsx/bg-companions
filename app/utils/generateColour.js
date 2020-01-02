const generateColour = () => {
  const random = new Date().getTime().toString(16);

  return `#${random.substr(-6)}`;
};

export default generateColour;
