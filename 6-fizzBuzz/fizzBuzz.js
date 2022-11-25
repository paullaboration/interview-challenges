// 6. FizzBuzz (common interview question)
console.log("6. FizzBuzz");

const FizzBuzz = (n) => {
  let array = [];
  for (let i = 1; i <= n; i++) {
    let x = i % 15 === 0 ? "FizzBuzz" : i % 5 === 0 ? "Buzz" : i % 3 === 0 ? "Fizz" : i;
    array.push(x);
  }
  return array;
};
console.log(FizzBuzz(15));