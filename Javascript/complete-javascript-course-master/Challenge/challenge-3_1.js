'use strict';
let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr1, arr2) {
  const arr = arr1.concat(arr2);
  let min = arr[0];
  let max = arr[0];
  let day = 1;
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}C in ${i + 1} day`);
    day++;
  }
};

printForecast(data1, data2);
