// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

const findMin = function (...nums) {
  return nums.reduce((min, currVal) => {
    return min < currVal ? min : currVal;
  });
};

function mergeObjects(object1, object2) {
  return { ...object1, ...object2 };
}

function doubleAndReturnArgs(arr, ...args) {
  return [...arr, ...args.map((num) => num * 2)];
}

const removeRandom = (items) => {
  let index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
};

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

const addKeyval = (obj, key, val) => {
  let obj1 = { ...obj };
  obj1.key = val;
  return obj1;
};

const removeKey = (obj, key) => {
  let obj1 = { ...obj };
  delete obj1.key;
  return obj1;
};

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const update = (obj, key, val) => {
  let obj1 = { ...obj };
  obj1.key = val;
  return obj1;
};
