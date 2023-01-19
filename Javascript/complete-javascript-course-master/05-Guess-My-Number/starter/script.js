'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highestScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const start = function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // No input
  if (!guess) {
    displayMessage('Not a number!');
  }
  //when guess is wrong
  else if (guess != secretnumber) {
    if (score > 1) {
      displayMessage(guess > secretnumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // player wins
  else if (guess === secretnumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;
    if (score > highestScore) {
      highestScore = score;
    }
  }
};

const again = function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
};
document.querySelector('.check').addEventListener('click', start);
document.querySelector('.again').addEventListener('click', again);
