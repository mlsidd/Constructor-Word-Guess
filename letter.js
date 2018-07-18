// Create a constructor function that can create letter objects
var Letter = function (letter) {
    this.letter = letter; // letter in word
    this.bool = false; // true or false depending on if user guessed it
    this.letterDisplay = function () {
        if (this.bool === false) {
            return this.letter = "_"
        } else {
            return this.letter = letter
        }
    };  // function that returns an _ if user's guess is false and the actual letter if the user's guess is true
    this.guessed = function (userGuess) {
        if (userGuess.toLowerCase() === this.letter) {
            this.bool = true
        } else {
            this.bool = false
        }
    } // function that updates the boolean value to true if the user guesses the letter correctly
}

module.exports = Letter;

//   var test = new Letter("d", false);
//   console.log(test)
//   console.log(test.letter)