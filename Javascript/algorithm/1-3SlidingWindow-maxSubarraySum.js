// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

// 1. 주어진 배열안에서 주어진 숫자의 연속된 수 만큼의 합이 가장 큰 값을 구하는 것
// 2. maxSubarraySum([100, 200, 300, 400], 2)
// 3. 배열을 한번만 훑어서 확인하려면 처음부터 주어진 숫자의 연속된 수를 옆으로 밀고 나가는게 좋을 듯
// 4. 연속된 수를 더하는 기능 먼저 하고 맥스랑 비교, 더 크면 맥스 수정 아니면 다음 숫자로 넘어감

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxium = 0;
  let sum = 0;
  let i = 0;
  let j = num - 1;
  for (let k in arr) {
    if (k <= j) {
      sum += arr[k];
      maxium += arr[k];
    }
    if (k > j) {
      sum = sum - arr[i] + arr[j + 1];
      i++;
      j++;
    }
    if (sum > maxium) {
      maxium = sum;
    }
  }
  return maxium;
}
