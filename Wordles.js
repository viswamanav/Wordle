// generate a random word for the user to guess
const words = ["apple", "banana", "orange", "grape", "pear"];
const word = words[Math.floor(Math.random() * words.length)];

// initialize variables
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;

// game loop
while (remainingLetters > 0) {
  // show the player their progress
  alert(answerArray.join(" "));

  // get a guess from the player
  let guess = prompt("Guess a letter, or click Cancel to stop playing.");
  if (guess === null) {
    // exit the game loop if the player clicks Cancel
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    // update the game state with the player's guess
    let correctGuess = false;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        answerArray[i] = guess;
        remainingLetters--;
        correctGuess = true;
      }
    }
    if (!correctGuess) {
      alert("Sorry, that letter is not in the word.");
    }
  }
}

// show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word + ".");