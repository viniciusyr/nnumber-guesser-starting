let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, secretNumber) => {
    let userGuessedNumber = Math.abs(userGuess - secretNumber);
    let compGuessedNumber = Math.abs(computerGuess - secretNumber);

    if(userGuessedNumber <= compGuessedNumber){
        return true;
    } else {
        return false;
    }
};

const updateScore = (winner) => {
    if(winner === 'human'){
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}

function checkNumber(value) {
    if(value >= 10){
        alert('Please choose a number between 0 and 9.')
    }
}