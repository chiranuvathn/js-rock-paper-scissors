
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1:
            return "rock";
        
        case 2:
            return "paper";

        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please type 'rock', 'paper', or 'scissors' as your choice.");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    const humanChoiceToLowerTxt = text.toLowerCase(humanChoice)
    
}