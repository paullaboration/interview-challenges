// 4. Find the Longest Word in a String
console.log("4. Find the Longest Word in a String");

const longestWord = (s) =>
  s.split(" ").sort((a, b) => b.length - a.length)[0].length;

const s = "What if we try a super-long word such as otorhinolaryngology";
console.log(longestWord(s));