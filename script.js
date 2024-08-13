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
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Draw! You both selected the same thing");
        console.log(`Player score: ${humanScore} vs. Computer score: ${computerScore}`)
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You won! What you selected beat the computer's choice");
        humanScore += 1;
        console.log(`Player score: ${humanScore} vs. Computer score: ${computerScore}`)
    } else {
        console.log("You lose! What the computer selected beat your choice");
        computerScore += 1;
        console.log(`Player score: ${humanScore} vs. Computer score: ${computerScore}`)
    }
}
