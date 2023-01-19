"use strict";
const scores = {
  dolphins: [97, 112, 101],
  koalas: [109, 95, 104],
};

const gameTimes = scores.dolphins.length;

function getScoreSum(team) {
  let sum = 0;
  let score = scores[team];
  for (let i in score) {
    if (score[i] > 100) {
      sum += score[i];
    }
  }
  return sum;
}
function getScoreAvg(sum) {
  let avg = sum / gameTimes;
  return avg;
}

console.log(getScoreSum("dolphins"));
console.log(getScoreAvg(getScoreSum("dolphins")));
console.log(getScoreSum("koalas"));
console.log(getScoreAvg(getScoreSum("koalas")));

const dolphinsAvg = getScoreAvg(getScoreSum("dolphins"));
const koalasAvg = getScoreAvg(getScoreSum("koalas"));

if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins win!");
} else if (dolphinsAvg < koalasAvg) {
  console.log("Koalas win!");
} else {
  console.log("Draw!");
}
