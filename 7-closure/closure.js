// 7. What is a closure? (one of the most common JS interview questions as well)
console.log("7. Closure");

// Definition: A closure is a function having access to the parent scope, regardless of where that function is executed. Usually it's an inner function that has access to the outer function’s variables. Example of a closure:

const counter = () => {
  let total = 0;
  return () => console.log((total += 1));
};

let count = counter();
count(); // logs 1
count(); // logs 2
count(); // logs 3