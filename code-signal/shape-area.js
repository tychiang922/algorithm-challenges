/* Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. */

function solution(n) {
  var result = 1;
  for (var i = n - 1; i > 0; i--) {
    result += 4 * i;
  }
  return result;
}

solution();
