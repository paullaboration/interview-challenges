// 3. Reverse a String
console.log("3. Reverse a string");

const myString = "Greetings from Earth";

const reverseWords = (string) => string.split(" ").reverse().join(" ");
console.log(reverseWords(myString));

const reverseString = (string) => string.split("").reverse().join("");
console.log(reverseString(myString));