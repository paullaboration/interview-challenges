// 2A. Sorting, ascending and descending
console.log("2A. Sorting, ascending and descending");

console.log([3, 4, 2, 1, 5, 6].sort((a, b) => a - b));
console.log([3, 4, 2, 1, 5, 6].sort((a, b) => b - a));

// 2B. Sum of an array
console.log("2B. Sum of an array");

console.log([3, 4, 2, 1, 5, 6].reduce((a, b) => a + b));