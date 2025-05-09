'use strict';

// Selecting Elements.
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  //switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0; // 게임 로직에서 변수 값을 리셋
  activePlayer = activePlayer === 0 ? 1 : 0;
  //In a game, it is used to apply special styles to the player whose turn it is or to highlight the active player.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display a dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1: if true
    if (dice !== 1) {
      //Add dice to the current score
      currentScore += dice; // currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; // Change Later
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      //Finishing the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

// Activate the reset button
document.querySelector('.btn--new').addEventListener('click', function () {
  diceEl.classList.add('hidden');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  document.querySelectorAll('.score').forEach((el) => (el.textContent = 0));
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  playing = true;
});
