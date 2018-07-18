// Import from letter.js
var letter = require('./letter.js');

// Create a constructor that contains the word object that the user is guessing
function Word(currentWord) {
    this.currentWord = currentWord;
    // Create an array of new letter objects in which each represents
    // a letter in the current word
    for (var i = 0; i < currentWord.length; i++) {
        this.arrayOfLetters = [new letter(currentWord[i])];
    }
    // Create a function that returns a string representing the current
    // word.  Call the letterDisplay function from letter.js for each object
    // and concatenate all together
    this.displayWord = function () {
        for (var i = 0; i < currentWord.length; i++) {
            this.wordWithBlanks = [this.arrayOfLetters[i].letterDisplay()];
        }
        return this.wordToDisplay = this.wordWithBlanks.join(" ");
    }
    // Create a function that takes in a user inputted character as an argument
    // and uses the guessed function from letter.js and checks each letter object
    // to see if the user's guess is a match
    this.checkGuess = function (userGuess) {
        for (var i = 0; i < this.arrayOfLetters.length; i++) {
            this.arrayOfLetters[i].guessed(userGuess);
        }
    }

}

module.exports = Word;