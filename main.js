function getRandom(max) {
    return Math.floor(Math.random() * max);

}

function computerPlay() {
    let choice = getRandom(3);

    if (choice === 0) {
        return "rock";
    }

    else if (choice === 1) {
        return "paper";
    }

    else if (choice === 2) {
        return "scissors";
    }

}

const container = document.querySelector('#choices');
const results = document.querySelector('#results');
const output = document.createElement('div');
const playerChoice = document.createElement('div');
const compChoice = document.createElement('div');
const score = document.querySelector('#score');
const playerPoints = document.createElement('div');
const compPoints = document.createElement('div');




function remove(parameter) {
    while (parameter.firstChild) {
        parameter.removeChild(parameter.firstChild);
    }

}

function add(str) {

    output.classList.add('output');
    output.textContent = str;
    container.appendChild(output);

}

function pick(player, comp) {

    

    playerChoice.classList.add('playerChoice');
    playerChoice.textContent = "You chose: " + player;
    results.appendChild(playerChoice);
    compChoice.classList.add('compChoice');
    compChoice.textContent = "Computer chose: " + comp;
    results.appendChild(compChoice);
    

}

let playerScore = 0;
let computerScore = 0;
let semaphore = 0;


function updateScore(){

    playerPoints.classList.add('playerPoints');
    playerPoints.textContent = playerScore;
    score.appendChild(playerPoints);
    compPoints.classList.add('compPoints');
    compPoints.textContent = computerScore;
    score.appendChild(compPoints);



    if(computerScore == 5){

        remove(container);
        add('You lose! try again');
        semaphore = 1;
    }

    if(playerScore == 5){
        remove(container);
        add('You win!');
        semaphore = 1;
    }




}


function resetGame(){

    playerScore = 0;
    computerScore = 0;
    remove(container);
    remove(score);
    remove(results)
    add('Make a Choice');
    updateScore();
    semaphore = 0;

}


function playRound(playerSelection, computerSelection) {

    if(semaphore == 1){ //if game is over
        return;
    }
    
    remove(container);
    remove(score);
   
    pick(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        //remove();
        add('Draw, Try Again!');
        updateScore();
        return "Draw, Try again!"
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
        //remove();
        add('Computer Wins!');
        computerScore++;
        updateScore();
        return "Computer Wins!"
    }

    if (playerSelection == "rock" && computerSelection == "scissors") {
       // remove();
        playerScore++;
        add('Player Wins!');
        updateScore();
        return "Player Wins!"
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        //remove();
        add('Player Wins!');
        playerScore++;
        updateScore();
        return "Player Wins!"
    }

    if (playerSelection == "paper" && computerSelection == "scissors") {
       // remove();
        add('Computer Wins!');
        computerScore++;
        updateScore();
        return "Computer Wins!"
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
       // remove();
        add('Player Wins!');
        playerScore++;
        updateScore();
        return "Player Wins!"
    }

    if (playerSelection == "scissors" && computerSelection == "rock") {
       // remove();
        add('Computer Wins!');
        computerScore++;
        updateScore();
        return "Computer Wins!"
    }


}


const btns = document.querySelectorAll('div'); 


function game(e) {

    if (this.classList.value == "btn") {
        const playerSelection = this.id;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        return;
    }
    else {
        return;
    }

}

btns.forEach(div => div.addEventListener('click', game, {
    capture: false
}));


const resetButton = document.querySelector('#reset'); 
resetButton.addEventListener('click', resetGame);

