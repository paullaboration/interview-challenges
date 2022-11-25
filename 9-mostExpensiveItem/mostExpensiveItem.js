// 9. Most expensive item. (Objects)
console.log("9. Most expensive item");

const mostExpensiveItem = (obj) =>
  Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0];

const obj = {
  tv: 30,
  skate: 20,
  stereo: 50
};

console.log(mostExpensiveItem(obj));