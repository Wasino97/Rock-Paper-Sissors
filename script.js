let computerScore = 0;
let playerScore = 0;

function computerPlay () {
    let myArray = [
        'Rock',
        'Paper',
        'Sissors'
    ];
   return myArray[Math.floor(Math.random() * myArray.length)];
};

function playRound (playerPick) {
    const computerPick = computerPlay();
    let result = ""

    if ((playerPick === 'Rock' && computerPick === 'Sissors') ||
        (playerPick === 'Sissors' && computerPick === 'Paper') ||
        (playerPick === 'Paper' && computerPick === 'Rock')) {
        
        playerScore += 1
        result = "You Win!"

        if (playerScore == 5) {
            result += 'You won the game!'
        }
    } else {
        computerScore += 1
        result = "You Loss!"

        if (computerScore == 5) {
            result += 'You Lost the game!'
        }
    }
}
const playerPick = "Rock";