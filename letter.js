// Create a constructor function that can create letter objects
function Letter(letter, bool) {
    this.letter = letter; // letter in word
    this.bool = bool; // true or false depending on if user guessed it
    this.letterDisplay = function () {
        if(this.bool === false) {
            this.letter = "_"
        } else {
            this.letter = letter
        }
    };  // function that returns an _ if user's guess is false and the actual letter if the user's guess is true
    this.guessed = function(userGuess){
        if(userGuess === this.letter) {
            this.bool = true
        } else {
            this.bool = false
        }
    } // function that updates the boolean value to true if the user guesses the letter correctly
  }

  module.exports = {
    letter: Letter(letter.bool)
  };