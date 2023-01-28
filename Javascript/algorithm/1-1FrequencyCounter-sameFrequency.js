// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  if (String(num1).length != String(num2).length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};

  for (let num of String(num1)) {
    obj1[num] = (obj1[num] || 0) + 1;
  }
  for (let num of String(num2)) {
    obj2[num] = (obj2[num] || 0) + 1;
  }
  for (let key in obj1) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return true;
}
