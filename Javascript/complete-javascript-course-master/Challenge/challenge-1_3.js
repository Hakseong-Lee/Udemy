'use strict';
// function calTip(bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   console.log(
//     `The bill was ${bill}, the tip was ${tip}, and the total value is ${
//       bill + tip
//     }`
//   );
// }
function calTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}
function avg(arr) {
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }
  return sum / arr.length;
}
// const data = [125, 555, 44];
// const tips = [];
// for (let i in data) {
//   const tip = calTip(data[i]);
//   tips.push(tip);
// }
// const total = [];
// for (let i in data) {
//   let add = data[i] + tips[i];
//   total.push(add);
// }
// console.log(data);
// console.log(tips);
// console.log(total);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i in bills) {
  let tip = calTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}

console.log(tips);
console.log(total);
console.log(avg(tips));
console.log(avg(total));
