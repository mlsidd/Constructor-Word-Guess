// Import the word.js file
var word = require('./word.js');

// Create lives variable and array of words variable
var guessesRemaining = 10;
var arrayOfWords = ["cat", "dog", "mouse", "house"];

// Randomly select a word to be used in the game (use random number in place of inde)x
// Store this word in the word constructor from word.js
var currentWord = new word(arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]);
currentWord.displayWord();

function askUser() {
  if (guessesRemaining > 0 && currentWord.currentWord !== currentWord.wordToDisplay) {

    // Prompt user for letter guesses
    var inquirer = require("inquirer");

    inquirer.prompt([
      {
        name: "letter",
        message: "What letter do you guess?"
      }
    ]).then(function (answers) {

      var letterGuess = answers.letter;
      currentWord.checkGuess(letterGuess)
      // Start at 10 guesses remaining and subtract until reach 0
      guessesRemaining = guessesRemaining - 1;
    })
  } else if (currentWord.currentWord === currentWord.wordToDisplay) {
    console.log("You Win!")
  } else { askUser() } // otherwise, complete the askUser function
}

