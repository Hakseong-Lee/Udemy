// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// Time Complexity - O(n)

// Space Complexity - O(1)

// 1. 배열과 숫자를 인풋으로 받아 배열 속 최소한의 숫자만 더해서 인풋받은 숫자를 만드는 거 ?
// 2. minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// 3. 처음 포인트와 두번째부터를 더해서 인풋이랑 비교해서 모자라면 오른쪽으로 증가 많아지면 하나 떨구고

function minSubArrayLen(arr, num) {
  let start = 0;
  let end = 1;
  if (arr[start] > num) {
    return 1;
  }
  let total = arr[start] + arr[end];
  let minLen = Infinity;
  while (start < arr.length) {
    if (arr[end] > num) {
      return 1;
    }
    if (total < num && end < arr.length) {
      end++;
      total += arr[end];
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else break;
  }
  return minLen === Infinity ? 0 : minLen + 1;
}
