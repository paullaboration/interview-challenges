// 1. Remove duplicates from an array (one of the most common interview questions!)
console.log("1. Remove duplicates from an array");

const dups = [3, 4, 2, 1, 2, 5, 5, 1, 1, 1, 6];

const Solution_1 = dups.filter((x, i) => dups.indexOf(x) === i);
console.log("Solution_1", Solution_1);

const Solution_2 = [...new Set(dups)];
console.log("Solution_2", Solution_2);

const Solution_3 = dups.reduce((a, v) => (a.includes(v) ? a : [...a, v]), []);
console.log("Solution_3", Solution_3);

const Solution_4 = (array) => {
  let result = [];
  for (let x of array) {
    if (!result.includes(x)) result.push(x);
  }
  return result;
};
console.log("Solution_4", Solution_4(dups));
