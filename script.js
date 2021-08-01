'use strict';

const wrongEffect = new Audio('wrong.wav')
const correctEffect = new Audio('correct.wav')
let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function resetScreen() {
  setTimeout(() => {
    document.body.style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?'
  }, 1000)
}

//check button
const check = document.querySelector('.check')
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    displayMessage('⛔ Invalid Number')
    document.body.style.backgroundColor = 'red'
    document.querySelector('.number').textContent = 'X'
    wrongEffect.play()
    document.querySelector('.score').textContent = score
    score--
    resetScreen()
  } else if (guess === secretNumber) {
    displayMessage('✅ Correct Number!')
    document.querySelector('.number').textContent = secretNumber
    document.body.style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem';
    correctEffect.play()

    if (score > highscore) {
      highscore = score
      document.querySelector('.score').textContent = highscore
      document.querySelector('.highscore').textContent = highscore
    }
  } else if (guess != secretNumber) {
    displayMessage(guess < secretNumber ? '📉 Too low' : '📈 Too high')
    document.body.style.backgroundColor = 'red'
    document.querySelector('.number').textContent = 'X'
    document.querySelector('.score').textContent = score
    score--
    resetScreen()
    wrongEffect.play()
  }
})

//again button
const again = document.querySelector('.again')
again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  displayMessage('Start guessing...')
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('.number').style.width = '15rem';
  document.body.style.backgroundColor = '#222'
})