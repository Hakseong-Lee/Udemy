'use strict';

/* global CustomError, getLikedBrands, getTopBrandsForGender */

const like = [
  { id: 1, name: 'hi' },
  { id: 2, name: 'dfaessa' },
  { id: 3, name: 'hiffdsafe' },
];
const gender = [
  { id: 1, name: 'hi' },
  { id: 4, name: '아디' },
  { id: 5, name: 'ㄹㅇㄴㅁㄹ' },
];

function solution(U, N) {
  return new Promise((resolve, reject) => {
    // Resolve the promise with the result
    let result = [];

    for (let i = 0; i < like.length; i++) {
      if (result.length < N) {
        result.push(like[i].name);
      } else break;
    }
    for (let i = 0; i < gender.length; i++) {
      if (result.length < N) {
        result.push(gender[i].name);
      } else break;
    }
    console.log(result);
  });
}

function CustomError() {
  console.error('Not enough data');
  alert('Not enough data');
}

function getLikedBrands(id) {}

solution(like, 4);
