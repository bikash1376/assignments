/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
 function clean(str) {
  // Moon star moon star ["moon", "star"], "moonstar" ["m", "o", "o"...]
  return str.toLowerCase().split(' ').join('').split('').sort().join('')
 }
 return clean(str1) == clean(str2);
}

module.exports = isAnagram;
