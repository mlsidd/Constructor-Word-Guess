// Import from letter.js
var letter = require('./letter.js');

// Create a constructor that contains the word object that the user is guessing
function Word() {
    // Create an array of new letter objects in which each represents
    // a letter in the current word
    this.arrayOfLetters = new letter.Letter()
    // Create a function that returns a string representing the current
    // word.  Call the letterDisplay function from letter.js for each object
    // and concatenate all together
    this.currentWord = .join(" ")
    // Create a function that takes in a user inputted character as an argument
    // and uses the guessed function from letter.js and checks each letter object
    // to see if the user's guess is a match

}


module.exports = {
    word: Word()
  };