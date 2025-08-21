

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
        scorePara.textContent = "computer picks paper and BEATS your rock!"
        computerPoints++;

    } else if (player == "paper" && cpu == "scissors") {
        scorePara.textContent = "computer picks scissors and BEATS your paper!"
        computerPoints++;

    } else if (player == "scissors" && cpu == "rock") {
        scorePara.textContent = "computer picks rock and BEATS your scissors!"
        computerPoints++;

    } else if (player == "rock" && cpu == "scissors") {
        scorePara.textContent = "computer picks scissors and you SMASH them with your rock!"
        playerPoints++;

    } else if (player == "paper" && cpu == "rock") {
        scorePara.textContent = "computer picks rock and you SMASH it with your paper!"
        playerPoints++;

    } else if (player == "scissors" && cpu == "paper"){
        scorePara.textContent = "computer picks paper and you SMASH it with your scissors"
        playerPoints++;

    } else {
        scorePara.textContent = `Computer picks: ${cpu} Player picks: ${player}! It's a DRAW!`

    }
    
    gameRound++;
    scoreDisplay.textContent = `Round: ${gameRound} Cpu: ${computerPoints} points Player: ${playerPoints} points`

    if (gameRound === 5) {
    if (playerPoints > computerPoints) {
    scorePara.textContent = `Player scored ${playerPoints} out of 5 points and WON the bout!`
    buttons.forEach((button) => button.remove())
    scoreDisplay.remove()

    } else if (playerPoints < computerPoints) {
    scorePara.textContent = `Computer scored ${computerPoints} out of 5 points and WON the bout!`
    buttons.forEach((button) => button.remove())
    scoreDisplay.remove()

    } else {
    scorePara.textContent = `Both players scored ${playerPoints}! It's a DRAW!`
    buttons.forEach((button) => button.remove())
    scoreDisplay.remove()

} 
    let button = document.createElement("button")
    button.textContent = "RESTART"
    body.appendChild(button)

    button.addEventListener("click", () => location.reload())
    
}
}

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const buttons = document.querySelectorAll("button")
const body = document.querySelector("body")
let scoreDisplay = document.querySelector("#score")
scoreDisplay.textContent = "Click to play!"
let scorePara = document.createElement("div")
body.appendChild(scorePara)



rock.addEventListener("click", () => gameLogic("rock", getComputerChoice(computerOptions)))
paper.addEventListener("click", () => gameLogic("paper", getComputerChoice(computerOptions)))
scissors.addEventListener("click", () => gameLogic("scissors", getComputerChoice(computerOptions)))




/* while (gameRound < 5) {
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

let playAgain = confirm("Do you wanna play again?") 

playAgain == true 
? location.reload() 
: alert("Thanks for playing!") */







