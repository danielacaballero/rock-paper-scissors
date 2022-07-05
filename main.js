function getRandom(max){
    return Math.floor(Math.random()*max);

}

function computerPlay(){
    let choice = getRandom(3);

    if(choice === 0){
       return "rock"; 
    }

    else if(choice === 1){
        return "paper";
    }

    else if(choice === 2){
        return "scissors";
    }

}

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        return "Draw, Try again!"
    }

    if(playerSelection == "rock" && computerSelection == "paper"){
        return "Computer Wins!"
    }

    if(playerSelection == "rock" && computerSelection == "scissors"){
        return "Player Wins!"
    }

    if(playerSelection == "paper" && computerSelection == "rock"){
        return "Player Wins!"
    }

    if(playerSelection == "paper" && computerSelection == "scissors"){
        return "Computer Wins!"
    }

    if(playerSelection == "scissors" && computerSelection == "paper"){
        return "Player Wins!"
    }

    if(playerSelection == "scissors" && computerSelection == "rock"){
        return "Computer Wins!"
    }


}


function game(){

 for(let i = 0; i < 5; i++){
    console.log(playRound(playerSelection, computerSelection));
 }

}

const playerSelection = prompt("Choose rock, paper, or scissors:");
const computerSelection = computerPlay();


game();
