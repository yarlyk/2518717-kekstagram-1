import { getRandomInteger } from './get-random-array-element.js';

const CreateUnicUser = () => {
  const i = getRandomInteger(1, 10);
  return i < 10 ? `0${i}` : i;
};

export { CreateUnicUser };
