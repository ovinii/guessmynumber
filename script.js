'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1)

//check button
const check = document.querySelector('.check')
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, secretNumber)

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number!'
    document.querySelector('.number').textContent = secretNumber
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low'
    let score = document.querySelector('.score')
    score--
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high'
    score--
  } else {
    document.querySelector('.message').textContent = '⛔ Invalid Number'
    score--
  }
})

//again button
const again = document.querySelector('.again')
again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
})