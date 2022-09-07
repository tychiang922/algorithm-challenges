/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. */

/*
Input = array of integers
Output = boolean determining whether an integer repeats more than once in the array

Sort the array
Create variable prevNumber and assign first number in array
Need to cycle through the array => for loop starting at 2nd number in array
  if (array[index] === prevNumber) then return true
  prevNumber = array[index]
Return false because loop finishes without finding a match
*/

var containsDuplicate = function (nums) {
  nums.sort();
  var prevNumber = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] === prevNumber) {
      return true;
    }
    prevNumber = nums[i];
  }
  return false;
};

containsDuplicate();
