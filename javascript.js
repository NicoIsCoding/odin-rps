//Pseudo code
//Generate computer choice "rock", "paper", "scissors"
//Prompt player choice
//Convert player choice to lowercase
//Create function that determines win/lose combos
//Create a loop that replays the game 5 times -> gameRound variable
//Check points at the end and declare winner

let computerChoice = ["rock", "paper", "scissors"];
let playerChoice;
let computerPoints;
let playerPoint;
let gameRound = 1;

function getComputerChoice(choice){
    let index =Math.floor(Math.random() * choice.length)
    return choice[index];
}

console.log(getComputerChoice(computerChoice))




