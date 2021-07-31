'use strict';

const wrongEffect = new Audio('wrong.wav')
const correctEffect = new Audio('correct.wav')
let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20;
let highscore = 0;

//check button
const check = document.querySelector('.check')
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, secretNumber)
  console.log(typeof(guess), typeof(secretNumber))

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number!'
    document.querySelector('.number').textContent = secretNumber
    document.body.style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem';
    correctEffect.play()

    if(score > highscore) {
      highscore = score
      document.querySelector('.score').textContent = highscore
      document.querySelector('.highscore').textContent = highscore
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low'
    score--
    document.body.style.backgroundColor = 'red'
    document.querySelector('.number').textContent = 'X'
    wrongEffect.play()
    setTimeout(() => {
      document.body.style.backgroundColor = '#222'
      document.querySelector('.number').textContent = '?'
    }, 1000)
    document.querySelector('.score').textContent = score
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high'
    document.body.style.backgroundColor = 'red'
    document.querySelector('.number').textContent = 'X'
    wrongEffect.play()
    setTimeout(() => {
      document.body.style.backgroundColor = '#222'
      document.querySelector('.number').textContent = '?'
    }, 1000)
    score--
    document.querySelector('.score').textContent = score
  } else {
    document.querySelector('.message').textContent = '⛔ Invalid Number'
    document.body.style.backgroundColor = 'red'
    document.querySelector('.number').textContent = 'X'
    wrongEffect.play()
    setTimeout(() => {
      document.body.style.backgroundColor = '#222'
      document.querySelector('.number').textContent = '?'
    }, 1000)
    score--
    document.querySelector('.score').textContent = score
  }
})

//again button
const again = document.querySelector('.again')
again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('.number').style.width = '15rem';
  document.body.style.backgroundColor = '#222'
})