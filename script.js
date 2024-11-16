'use strict';
/*console.log((document.querySelector('.message').textContent = 'great '));
document.querySelector('.message ').textContent = 'correct number';
console.log(
  (document.querySelector('.message ').textContent = 'correct number')
);
document.querySelector('.message ').textContent = 13;
document.querySelector('.score ').textContent = 2;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

// click of the button
//event :-- something that happens on the page

// using DOM we can also change styles:--
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // no input
  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER!';
    // input is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT NUMBER!';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // whenever we are manipulating styles always write in strings ("")
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // input is greater
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
    }
    // input is smaller
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO LOW!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = 0;
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').styles.width = '15 rem';
});
