// 10. Factorials and Primes.
console.log("10A. Factorial");

const factorial = (n) => (n < 2 ? 1 : n * factorial(n - 1));

console.log(factorial(5));
console.log(factorial(1));


console.log("10B. Prime");

const prime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(prime(31));
console.log(prime(10));
console.log(prime(1));