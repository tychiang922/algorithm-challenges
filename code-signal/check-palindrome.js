/* Given the string, check if it is a palindrome. */

function solution(inputString) {
  var pal = '';
  for (var i = inputString.length - 1; i >= 0; i--) {
    pal += inputString[i];
  }
  if (pal === inputString) {
    return true;
  }
  return false;
}

solution();
