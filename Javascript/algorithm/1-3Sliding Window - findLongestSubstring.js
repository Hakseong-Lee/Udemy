// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

// 1. 반복이 나오기 전까지의 연속된 글자의 수

function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {
      start = Math.max(start, obj[char]);
    }
    longest = Math.max(longest, i - start + 1);
    obj[char] = i + 1;
  }
  return longest;
}
