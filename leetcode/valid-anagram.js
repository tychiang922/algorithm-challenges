/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

/*
Input = two strings
Output = boolean determining whether they are anagrams of each other

Convert strings to array
Sort both arrays
if (length1 !== length2) then return false
Cycle through array => For loop with index at 0 and end at length
  if (array1[i] !== array2[i]) then return false
Return true once loop is finished
*/

var isAnagram = function (s, t) {
  var sArray = Array.from(s);
  var tArray = Array.from(t);
  if (sArray.length !== tArray.length) {
    return false;
  }
  sArray.sort();
  tArray.sort();
  for (var i = 0; i < sArray.length; i++) {
    if (sArray[i] !== tArray[i]) {
      return false;
    }
  }
  return true;
};

isAnagram();
