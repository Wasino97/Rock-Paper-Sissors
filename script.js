let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let myArray = ['Rock','Paper','Sissors'];
    const randomPick = myArray[Math.floor(Math.random() * myArray.length)];
    console.log(randomPick);
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log('tie');
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Sissors') ||
        (playerChoice === 'Sissors' && computerChoice === 'Paper') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        console.log('You win!');
    } else {
        console.log('You loss');
    }
};

let playerChoice = 'Rock';
computerChoice = computerPlay();

console.log(playRound(playerChoice, computerChoice));

/* function playRound (playerChoice) {
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
 */