// Import the word.js file
var word = require('./word');

// Create lives variable and array of words variable
var lives = 10;
var arrayOfWords = [];

// Randomly select a word to be used in the game

// Store this word in the word constructor from word.js

// Prompt user for letter guesses
var inquirer = require("inquirer");

inquirer.prompt([
    {
      name: "name",
      message: "What is your name?"
    }, {
      name: "position",
      message: "What is your current position?"
    }, {
      name: "age",
      message: "How old are you?"
    }, {
      name: "language",
      message: "What is your favorite programming language?"
    }
  ]).then(function(answers) {
    // initializes the variable newProgrammer to be a programmer object which will take
    // in all of the user's answers to the questions above
    var newProgrammer = new Programmer(answers.name, answers.position, answers.age, answers.language);
    // printInfo method is run to show that the newProgrammer object was successfully created and filled
    newProgrammer.printInfo();
  });
  

// Start at 10 guesses remaining and subtract until reach 0