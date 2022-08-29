/* Given an integer n, return the largest number that contains exactly n digits. */

function solution(n) {
  var resultString = '';
  for (var nIndex = 0; nIndex < n; nIndex++) {
    resultString += '9';
  }
  var result = parseInt(resultString);
  return result;
}

solution();
