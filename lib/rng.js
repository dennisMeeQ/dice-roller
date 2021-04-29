const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const getRandomIntInRange = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

export const getRandomSixSidedDieValue = () => {
  return getRandomInt(6) + 1;
};
