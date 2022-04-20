var myArray = [
    'Rock',
    'Paper',
    'Sissors'
];

function computerPlay () {
    myArray[Math.floor(Math.random() * myArray.length)];
};

function playRound (playerPick,computerPick) {
    if ((playerPick === 'Rock' && computerPick === 'Sissors') ||
        (playerPick === 'Sissors' && computerPick === 'Paper') ||
        (playerPick === 'Paper' && computerPick === 'Rock')) {
        return 'You Win!'
    } else {
        return "You Loss"
    };
};

const playerPick = 'Rock';
const computerPick = computerPlay();
console.log(playRound(playerPick, computerPick));