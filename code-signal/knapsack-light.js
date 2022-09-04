/* You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items. */

function solution(value1, weight1, value2, weight2, maxW) {
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  } else if (value1 >= value2) {
    if (weight1 <= maxW) {
      return value1;
    } else if (weight2 <= maxW) {
      return value2;
    } else {
      return 0;
    }
  } else if (value2 >= value1) {
    if (weight2 <= maxW) {
      return value2;
    } else if (weight1 <= maxW) {
      return value1;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

solution();
