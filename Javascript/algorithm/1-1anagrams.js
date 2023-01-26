// validAnagram이라는 함수에 string 두개를 주면 두개의 구성 요소가 같은지 비교하여 참인지 거짓인지 리턴하는 함수를 만들어라
// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)
function validAnagram(str1, str2) {
  let arr1 = {};
  let arr2 = {};
  for (let ele of str1) {
    arr1[ele] = (arr1[ele] || 0) + 1;
  }
  for (let ele of str2) {
    arr2[ele] = (arr2[ele] || 0) + 1;
  }
  for (let key in arr1) {
    if (Object.keys(arr1).length != Object.keys(arr2).length) {
      return false;
    }
    if (arr1[key] != arr2[key]) {
      return false;
    }
  }
  return true;
}
