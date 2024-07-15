import { getRandomInteger } from './get-random-array-element.js';
import { getRandomArrayElement } from './get-random-array-element.js';
import { DESCRIPTION_PHOTOS } from './main.js';
import { createUnicValue } from './create-unic-value.js';
import { TEXT_COMMENTS } from './main.js';
import { NAME_AUTHORS } from './main.js';

const createUnicId = createUnicValue(1, 25);
const createUnicIdComment = createUnicValue(1, 10000000);
const descriptionPhotos = () => ({
  id: createUnicId(),
  url: `photos/${createUnicId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTOS),
  likes: getRandomInteger(15, 200),
  comments: {
    id: createUnicIdComment(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(TEXT_COMMENTS),
    name: getRandomArrayElement(NAME_AUTHORS),
  },
});

export{descriptionPhotos};
