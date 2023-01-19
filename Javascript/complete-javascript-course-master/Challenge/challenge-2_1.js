'use strict';
const calavg = (a, b, c) => (a + b + c) / 3;
const dol = calavg(85, 54, 41);
const koa = calavg(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No Winner.');
  }
};
console.log(dol);
console.log(koa);
checkWinner(dol, koa);
//
console.log();
