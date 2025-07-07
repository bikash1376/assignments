/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase();
  if(str1 === str1.split('').reverse().join('')
) {
  return true;
}
else {
  return false;
}
}

console.log(isPalindrome("Mom"))

module.exports = isPalindrome;
