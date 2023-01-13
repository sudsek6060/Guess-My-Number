'use strict';

const secreteNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function(){
  const guess = Number (document.querySelector('.guess').value); 
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number !'
    }else if (guess === secreteNumber) {
        document.querySelector('.message').textContent = 'Correct Number !';
        document.querySelector('.number').textContent = secreteNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if (guess > secreteNumber) {
        if (score >= 1) {
            document.querySelector('.message').textContent = 'TOO high!';
        score --;
        document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You Lose The Game'
        }
    }else if (guess < secreteNumber) {
        if (score >= 1) {
            document.querySelector('.message').textContent = 'Too Low!';
        score --;
        document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You Lose The Game'
        }
    }
});

document.querySelector('.againn').addEventListener('click', function () {
    score = 20;
    // secreteNumber = Math.trunc(Math.random() * 20) + 1;
  
    document.querySelector('.message').textContent = 'Start guessing...';
    // displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
  