/* You are given a two-digit integer n. Return the sum of its digits. */

function solution(n) {
  var nString = n.toString();
  var digit1 = parseInt(nString[0]);
  var digit2 = parseInt(nString[1]);
  var result = digit1 + digit2;
  return result;
}

solution();
