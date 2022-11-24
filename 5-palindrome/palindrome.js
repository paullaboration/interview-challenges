// 5. Palindrome or not?
console.log("5. Palindrome");

const palindrome = (s) => {
  s = s.toLowerCase();
  return s.split("").reverse().join("") === s;
};
console.log(palindrome("table"));
console.log(palindrome("Racecar"));

// Bonus: modify this function in such a way that it removes spaces and punctuation marks:
const palindrome1 = (s) => {
  s = s.toLowerCase().replace(/[\W_]/g, "");
  // Bonus: google "regular expressions" to understand the syntax /[\W_]/g
  return s.split("").reverse().join("") === s;
};
console.log(palindrome1("A man, a plan, a canal. Panama."));