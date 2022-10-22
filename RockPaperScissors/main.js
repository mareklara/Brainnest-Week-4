//calling the options
const rockOption = document.querySelector('#option-rock');
const paperOption = document.querySelector('#option-paper');
const scissorsOption = document.querySelector('#option-scissors');

//calling the result
const result = document.querySelector('.result');

//Init the game
rockOption.addEventListener('click', () => {
    startGame('rock')
});

paperOption.addEventListener('click', () => {
    startGame('paper')
});

scissorsOption.addEventListener('click', () => {
    startGame('scissors')
});

const playerWins = 'Player Wins';
const PlayerLoses = 'Player Loses';
const tie = 'It is a tie';
function startGame(option){
    //pc move
    const pcMove = pcChoice()
    //player move
    const userPlay = option;
    //comparing 
    const comparing = moves(pcMove, userPlay);
    //result
    if(comparing == 1){
        result.innerHTML = `User chooses ${userPlay}
        Pc chooses  ${pcMove} + ${playerWins}`;
    }

    if(comparing == 2){
        result.innerHTML = `User chooses ${userPlay}
        Pc chooses  ${pcMove} + ${playerLoses}`;
    }

    if(comparing == 3){
        result.innerHTML = `User chooses ${userPlay}
        Pc chooses  ${pcMove} + ${tie}`;
    }
};

function pcChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()*3);
    const getResultPc = choices[random];
    return (getResultPc);
};

function moves (user, pc){
    switch (user+pc){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            return 1; //win
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            return 2; //lose
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            return 3; //tie
    }
};