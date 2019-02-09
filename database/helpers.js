const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const idGenerator = () => {
  let max = 999999;
  let min = 100000;
  let id = Math.floor(Math.random() * (max - min) + min);
  return id;
}

const nameGenerator = () => {
  let itemName = '';
  let describers = [['Champion ', 'Nike ', 'Stussy ', 'Patagonia '],
    ['Exclusive ', 'Long Sleeve ', 'Graphic ', 'Woven '],
    ['Lightweight ', 'Pullover ', 'Logo ', 'Striped ', 'Zipper '],
    ['T-Shirt', 'Hoodie', 'Jersey', 'Tank Top']]
  for (let idx = 0; idx < describers.length; idx++) {
    let randDescriberIdx = Math.floor(Math.random() * describers[idx].length);
    itemName += describers[idx][randDescriberIdx];
  }
  return itemName;
};

const onlineOnlyGenerator = () => {
  let bools = [true, false]
  let random = Math.floor(Math.random() * 2);
  return bools[random];
};

const colorObjGenerator = () => {
  let colorObj = {};
  let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
  let hexValues = ['#C70039', '#429C0C', '#105EB6', '#E9EF0F', '#9F1163'];
  let randomIndex = Math.floor(Math.random() * 5);
  colorObj.colorName = colors[randomIndex];
  colorObj.hexValue = hexValues[randomIndex];
  return colorObj;
};

const imgArrayGenerator = () => {
  let images = [];
  let imageVariations = ['a', 'b', 'c', 'd', 'e', 'f'];
  let baseUrl = 'https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/'
  let set = getRandomIntInclusive(1, 2);
  let randomNumber = getRandomIntInclusive(1, 6);
  for (let i = 0; i < randomNumber; i++) {
    let image = {};
    image.url = `${baseUrl}00000${set}${imageVariations[i]}.jpg`
    if (i === 0) {
      image.isDefault = true;
    } else {
      image.isDefault = false;
    }
    images.push(image);
  }
  return images;
}

const optionsGenerator = () => {
  const options = [];
  const randomNumber = Math.floor(Math.random() * 4);
  for (let i = randomNumber; i < 4; i++) {
    let option = {};
    if (i === randomNumber) {
      option.isDefault = true;
    } else {
      option.isDefault = false;
    }
    option.color = colorObjGenerator();
    option.images = imgArrayGenerator();
    options.push(option);
  }
  return options;
}

const itemsDataGenerator = () => {
  const items = [];
  for (let i = 0; i < 100; i++) {
    items.push({
      id: idGenerator(),
      name: nameGenerator(),
      type: 'Top',
      price: getRandomIntInclusive(20, 100),
      onlineOnly: onlineOnlyGenerator(),
      options: optionsGenerator(),
    });
  }
  return items;
}
module.exports = itemsDataGenerator;