'use strict';

const dice = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const player1TotalScore = document.getElementById('score--0');
const player2TotalScore = document.getElementById('score--1');
const player1CurrentScore = document.getElementById('current--0');
const player2CurrentScore = document.getElementById('current--1');

let currentScore = 0;
let playerTurn = 1;

dice.classList.add('hidden');

const holdBtn = function () {
  if (playerTurn == 1 && player1TotalScore.textContent < 100) {
    player1TotalScore.textContent =
      Number(player1TotalScore.textContent) + currentScore;
    player1CurrentScore.textContent = 0;
    currentScore = 0;
    playerTurn = 2;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    if (player1TotalScore.textContent > 100) {
      playerTurn = 3;
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('main').classList.add('player--winner');
      document.querySelector('.player--0').classList.add('winner');
    }
  } else if (playerTurn == 2 && player2TotalScore.textContent < 100) {
    player2TotalScore.textContent =
      Number(player2TotalScore.textContent) + currentScore;
    player2CurrentScore.textContent = 0;
    currentScore = 0;
    playerTurn = 1;
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    if (player2TotalScore.textContent >= 100) {
      playerTurn = 3;
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('main').classList.add('player--winner');
      document.querySelector('.player--1').classList.add('winner');
    }
  }
};

const player = function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  console.log(diceNumber);
  dice.src = `dice-${diceNumber}.png`;

  if (playerTurn == 1 && player1TotalScore.textContent <= 100) {
    if (diceNumber >= 2) {
      currentScore += diceNumber;
      player1CurrentScore.textContent = currentScore;
    } else {
      currentScore = 0;
      player1CurrentScore.textContent = currentScore;
      playerTurn = 2;
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
    }
  } else if (playerTurn == 2 && player2TotalScore.textContent <= 100) {
    if (diceNumber >= 2) {
      currentScore += diceNumber;
      player2CurrentScore.textContent = currentScore;
    } else {
      currentScore = 0;
      player2CurrentScore.textContent = currentScore;
      playerTurn = 1;
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('.player--0').classList.add('player--active');
    }
  }
};

const reset = function () {
  playerTurn = 1;
  dice.classList.add('hidden');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('main').classList.remove('player--winner');
  document.querySelector('.player--0').classList.remove('winner');
  document.querySelector('.player--1').classList.remove('winner');
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1TotalScore.textContent = 0;
  player2TotalScore.textContent = 0;
};

roll.addEventListener('click', player);
hold.addEventListener('click', holdBtn);
newGame.addEventListener('click', reset);
