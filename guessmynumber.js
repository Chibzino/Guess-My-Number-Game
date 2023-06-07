"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Since the highest score is 20 it should be equal to 20
let score = 20;
let highScore = 0;
let guess = document.querySelector(".guess").value;

const displayMessage = function (message) {
  document.querySelector(".result").textContent = message;
};

const displayScore = function (score) {
 document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", function () {
  guess = document.querySelector(".guess").value;
  if (!guess) {
    displayMessage("Input Number!");
  }

  //when player wins
  else if (guess == secretNumber) {
    displayMessage("Correct!");
    document.querySelector(".number").textContent = secretNumber;

    //Manipulating CSS
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //Whne guess is gretaer than secrete number
  else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage("Too High!");

      score = score - 1;
      displayScore(score);
    } else {
      displayMessage("You Lost!");
       displayScore(score) = 0;
    }
  }
  //when guess is less than secret number
  else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage("Too Low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("You Lost the Game!");

     displayScore(score) = 0;
    }
  }
});

//Working on the play again button
document.querySelector(".play-btn").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start Guessing...");
  displayScore(score);
  document.querySelector(".number").textContent = "? ";
  guess = document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
});





/*


'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Since the highest score is 20 it should be equal to 20
let score = 20;

let highScore = 0;
let guess = document.querySelector('.guess').value;

document.querySelector('.check').addEventListener('click', function () {
  //The number keyword converts string to number
  let guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.result').textContent = 'Input Number';
  }

  //when player wins
  else if (guess == secretNumber) {
    document.querySelector('.result').textContent = 'Correct!';
    document.querySelector('.number').textContent = secretNumber;

    //Manipulating CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '15rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //Whne guess is gretaer than secrete number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.result').textContent = 'Too High!';

      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.result').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is less than secret number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.result').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.result').textContent = 'You Lost the Game!';

      document.querySelector('.score').textContent = 0;
    }
  }
});

//Working on the play again button
document.querySelector('.play-btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '? ';

  document.querySelector('.result').textContent = 'Start Guessing ';

  document.querySelector('.score').textContent = score;
  guess = document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '20px';
});
*/