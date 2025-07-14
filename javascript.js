//Pseudo code
//Generate computer choice "rock", "paper", "scissors"
//Prompt player choice
//Convert player choice to lowercase
//Create function that determines win/lose combos
//Create a loop that replays the game 5 times -> gameRound variable
//Check points at the end and declare winner

let computerOptions = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let computerPoints = 0;
let playerPoints = 0;
let gameRound = 0;

function getComputerChoice(choice){
    let index =Math.floor(Math.random() * choice.length)
    return choice[index];
}

function checkInput(player){
    if (player !== "rock" && player !== "paper" && player !== "scissors"){
        return console.log("your input is invalid!") 
    } else {
        return true;
    }
        
}

function gameLogic(player, cpu) {
    if (player == "rock" && cpu == "paper") {
        alert("computer picks paper and BEATS your rock!")
        computerPoints++;

    } else if (player == "paper" && cpu == "scissors") {
        alert("computer picks scissors and BEATS your paper!")
        computerPoints++;

    } else if (player == "scissors" && cpu == "rock") {
        alert("computer picks rock and BEATS your scissors!")
        computerPoints++;

    } else if (player == "rock" && cpu == "scissors") {
        alert("computer picks scissors and you SMASH them with your rock!")
        playerPoints++;

    } else if (player == "paper" && cpu == "rock") {
        alert("computer picks rock and you SMASH it with your paper!")
        playerPoints++;

    } else if (player == "scissors" && cpu == "paper"){
        alert("computer picks paper and you SMASH it with your scissors")
        playerPoints++;

    } else {
        alert(`Computer picks: ${cpu.toUpperCase()} Player picks: ${player.toUpperCase()}! It's a DRAW!`)

    }
    
    gameRound++;
    alert(`Round: ${gameRound} Cpu: ${computerPoints} points Player: ${playerPoints} points`)
}

while (gameRound < 5) {
    computerChoice = getComputerChoice(computerOptions);
    playerChoice = prompt("rock, paper or scissors?").toLowerCase();

    if (checkInput(playerChoice) == true) {
        gameLogic(playerChoice, computerChoice);
    } else {
        alert("your input is INVALID!")
        continue;
    }

}

if (playerPoints > computerPoints) {
    alert(`Player scored ${playerPoints} out of 5 points and WON the bout!`)

} else if (playerPoints < computerPoints) {
    alert(`Computer scored ${computerPoints} out of 5 points and WON the bout!`)

} else {
    alert(`Both players scored ${playerPoints}! It's a DRAW!`)
}

confirm("Do you wanna play again?") {
    
}





