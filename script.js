"use strict";

/*
  Project: Guess My Number
  Author: Victor Hugo Santos Aguiar
  Description: This JavaScript file represents my first project utilizing DOM manipulation, showcasing my journey in web development.
  The project is based on the original "Guess My Number" app from the lectures of Udemy's course, "The Complete JavaScript Course
  2024: From Zero to Expert!" by Jonas Schmedtmann, but with my personal touch in program logic and code refactoring.

  Project Overview:
  - The application involves guessing a randomly generated number within a specified range.
  - Users can input their guess and receive feedback on whether the guess is too high, too low, or correct.
  - The user interface is updated dynamically using DOM manipulation to reflect the game state.

  Notable Features:
  - Enhanced game logic: I've added my own logic to improve and personalize the gaming experience.
  - Code Refactoring: The original code has been refactored to improve readability, maintainability, and adherence to best practices.

  Credits:
  - Original App: Udemy's "The Complete JavaScript Course 2024: From Zero to Expert!" by Jonas Schmedtmann
  - Author's Name: Victor Hugo Santos Aguiar (@vhugoaguiar)

  Note: This project is part of my portfolio as a professional web developer, showcasing my skills in JavaScript, DOM manipulation, and code optimization.

  Feel free to explore the codebase and provide feedback!
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let elementCheck = document.querySelector(".check");
let elementScore = document.querySelector(".score");
let elementGuess = document.querySelector(".guess");
let elementMessage = document.querySelector(".message");
let elementNumber = document.querySelector(".number");
let elementBody = document.querySelector("body");
let elementHighScore = document.querySelector(".highscore");
let elementAgain = document.querySelector(".again");

// Refactored by Victor Hugo Aguiar: Added elementSelector parameter for versatile use throughout the code.
const displayText = (elementSelector, message) => {
  elementSelector.textContent = message;
};

// Added by Victor Hugo Aguiar: Encapsulates logic to update the game score, enhancing code modularity and readability
const updateScore = () => {
  score--;
  displayText(elementScore, score);
};

elementCheck.addEventListener("click", () => {
  const guess = Number(elementGuess.value);

  if (!guess) {
    displayText(elementMessage, "⛔ No number!");
  } else if (guess === secretNumber) {
    displayText(elementMessage, "🎯 Correct number!");
    displayText(elementNumber, secretNumber);

    elementBody.style.backgroundColor = "#60b347";
    elementNumber.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      displayText(elementHighScore, highScore);
    }
  } else {
    if (score > 1) {
      displayText(
        elementMessage,
        guess > secretNumber ? "⬆ Too high!" : "⬇ Too low!"
      );
      updateScore();
    } else {
      elementBody.style.backgroundColor = "#d9534f";
      displayText(elementMessage, "💥 You lost");
      displayText(elementScore, 0);
    }
  }
});

elementAgain.addEventListener("click", () => {
  score = 20;
  displayText(elementScore, score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayText(elementMessage, "Start guessing...");
  displayText(elementNumber, "?");
  elementNumber.style.width = "15rem";
  elementGuess.value = null;
  elementBody.style.backgroundColor = "#222";
});
