let playerScore = 0;
let computerScore = 0;
let compChoice = ["rock", 'paper', 'scissors'];

function computerPlay(){
    return compChoice[Math.floor(Math.random() * compChoice.length)];
};

function playRound(playerSelection, computerSelection){
    let result = "";

    if((playerSelection === 'rock' && computerSelection === 'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock')||
        (playerSelection === 'scissors' && computerSelection === 'paper')){

            playerScore ++;
            return result = "You Win! " + playerSelection + ' beats ' + computerSelection + '.' + " Player Score: " + playerScore + "  Computer Score: " + computerScore;

    }else if(playerSelection === computerSelection){
        return result = "It's a tie! You both Chose " + playerSelection;
        
     }else{
        computerScore ++; 
        return result = "You Lose! " + computerSelection + ' beats ' + playerSelection + '.' + "Player Score: " + playerScore + " Computer Score: " + computerScore;
        
        
};
}
function game(){
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        const pChoose = prompt("Enter Rock/Paper/Scissors")
        let playerSelection = pChoose.trim().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
}
if (playerScore > computerScore){
    return "You Won! Reload the Page to play again."
}if (playerScore < computerScore){
    return "You Lost! Reload the Page to play again."
};
};


console.log(game());