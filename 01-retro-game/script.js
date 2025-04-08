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
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number! 🚫';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!! 🎉';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
  } else {
  }
});
