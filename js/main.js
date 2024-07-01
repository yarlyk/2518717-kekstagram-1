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

function createUnicValue (beginningRange, endRange, qtyAfterPoint = 0){
  const previousValues = [];
  return function (){
    let currentValue = getRandomInteger (beginningRange, endRange, qtyAfterPoint = 0);
    if (previousValues.length >= (endRange - beginningRange + 1)) {
      console.error('Перебраны все числа из диапазона от ' + beginningRange + ' до ' + endRange);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(beginningRange, endRange, qtyAfterPoint = 0);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createUnicId = createUnicValue(1, 25);
const createUnicIdComment = createUnicValue(1, 10000000);

const descriptionPhotos = () => ({
  id: createUnicId(),
  url: `photos/${createUnicId()}.jpg`,
  description: getRandomArrayElement(descriptionPhoto),
  likes: getRandomInteger(15,200),
  comments: {
    id: createUnicIdComment(),
    avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
    message: getRandomArrayElement(textComments),
    name: getRandomArrayElement(nameAuthors),
  }
});
