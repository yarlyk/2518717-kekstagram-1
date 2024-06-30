let beginningRange;
let endRange;

const getRandomInteger = (beginningRange, endRange, qtyAfterPoint = 0) => {
  let i;
  if (endRange - beginningRange > 0) {
    i = beginningRange + Math.random() * (endRange - beginningRange);
    return Number(i.toFixed(qtyAfterPoint));
  }
  return NaN;
};

const descriptionPhoto = [
  'Редкий кадр стоил автору долгих томительных часов ожидания',
  'Лучшая работа автора',
  'Тонко подмечены детали',
  'Прекрасный фон',
  'Глаз не отвести',
];

const textComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

nameAuthors = [
  'Артём',
  'Гена',
  'Чебурашка',
  'Шапокляк',
  'Просто босс',
];

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const descriptionPhotos = () => ({
  id: getRandomInteger(1, 25),
  // () => {
  //   beginningRange = 1;
  //   endRange = 25;
  //   return getRandomInteger();
  // },
  //  () => {
  //   const previousValuesId = [];
  //   return function() {
  //     let newId = getRandomInteger(1,25);

  //   }
  //   if (previousValuesId.includes(newId)) {

  //   }
  //   previousValues.push(newId);
  //   return newId;
  // } idDescriptionPhotos.includes(getRandomInteger(1,25)) ? ,
  // url: `photos/${getRandomInteger(1,25)}.jpg`,
  description: getRandomArrayElement(descriptionPhoto),
  likes: getRandomInteger(15,200),//число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  comments: {
    id: getRandomInteger(1,2000),
    avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
    message: getRandomArrayElement(textComments),
    name: getRandomArrayElement(nameAuthors),
  }
});
console.log(descriptionPhotos());

// console.log(getRandomArrayElement(textComments));
