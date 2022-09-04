/* Some phone usage rate may be described as follows:

first minute of a call costs min1 cents,
each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
each minute after 10th costs min11 cents.
You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have? */

function solution(min1, min210, min11, s) {
  var time = 0;
  if (s >= min1) {
    s -= min1;
    time++;
    if (s >= min210) {
      for (var i = 0; i < 9; i++) {
        if (s >= min210) {
          s -= min210;
          time++;
        } else {
          return time;
        }
      }
      if (s >= min11) {
        while (s >= min11) {
          s -= min11;
          time++;
        }
      }
    }
  }
  return time;
}

solution();
