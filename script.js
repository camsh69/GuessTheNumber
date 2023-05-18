'use strict';

const randomNumber = () => Math.trunc(Math.random() * 20) + 1;
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const displayNumber = number =>
  (document.querySelector('.number').textContent = number);
const displayScore = score =>
  (document.querySelector('.score').textContent = score);
const displayHighScore = highScore =>
  (document.querySelector('.highScore').textContent = highScore);
const displayGuessValue = value =>
  (document.querySelector('.guess').value = value);
const changeBGColor = color =>
  (document.querySelector('body').style.backgroundColor = color);
const changeWidth = width =>
  (document.querySelector('.number').style.width = width);
const guessValue = () => document.querySelector('.guess').value;

let score = 20;
let highScore = 0;
let secretNumber = randomNumber();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessValue());

  //When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    changeBGColor('#60b347');
    changeWidth('30rem');

    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👇 Too high!' : '👆 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😢 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumber();
  score = 20;
  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing...');
  displayGuessValue('');
  changeBGColor('#222');
  changeWidth('15rem');
});
