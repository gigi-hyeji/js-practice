'use strict';
/*
console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🇰🇷 ';

document.querySelector('.number').textContent = 4444;
document.querySelector('.score').textContent = 20202020;

document.querySelector('.guess').value = 30;
document.querySelector('.guess').value =
  document.querySelector('.number').textContent;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number! 🚫';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!! 🎉';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--; //score = score - 1; 감소연산자
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else {
  }
});
